import { cloneDeep } from 'lodash';

import { ArrayVector, DataFrame, DataQueryResponse, Field, FieldType } from '@grafana/data';

import { transformBackendResult } from './backendResultTransformer';

// needed because the derived-fields functionality calls it
jest.mock('@grafana/runtime', () => ({
  // @ts-ignore
  ...jest.requireActual('@grafana/runtime'),
  getDataSourceSrv: () => {
    return {
      getInstanceSettings: () => {
        return { name: 'Loki1' };
      },
    };
  },
}));

const LOKI_EXPR = '{level="info"} |= "thing1"';
const inputFrame: DataFrame = {
  refId: 'A',
  meta: {
    executedQueryString: LOKI_EXPR,
  },
  fields: [
    {
      name: 'time',
      type: FieldType.time,
      config: {},
      values: new ArrayVector([1645030244810, 1645030247027]),
    },
    {
      name: 'value',
      type: FieldType.string,
      config: {},
      values: new ArrayVector(['line1', 'line2']),
    },
    {
      name: 'labels',
      type: FieldType.string,
      config: {
        custom: {
          json: true,
        },
      },
      values: new ArrayVector(['{ "level": "info", "code": "41🌙" }', '{ "level": "error", "code": "41🌙" }']),
    },
    {
      name: 'tsNs',
      type: FieldType.string,
      config: {},
      values: new ArrayVector(['1645030244810757120', '1645030247027735040']),
    },
    {
      name: 'id',
      type: FieldType.string,
      config: {},
      values: new ArrayVector(['id1', 'id2']),
    },
  ],
  length: 5,
};

describe('loki backendResultTransformer', () => {
  it('processes a logs-dataframe correctly', () => {
    const response: DataQueryResponse = { data: [cloneDeep(inputFrame)] };

    const expectedFrame = cloneDeep(inputFrame);
    expectedFrame.meta = {
      ...expectedFrame.meta,
      preferredVisualisationType: 'logs',
      searchWords: ['thing1'],
      custom: {
        lokiQueryStatKey: 'Summary: total bytes processed',
      },
    };

    const expected: DataQueryResponse = { data: [expectedFrame] };

    const result = transformBackendResult(
      response,
      [
        {
          refId: 'A',
          expr: LOKI_EXPR,
        },
      ],
      []
    );
    expect(result).toEqual(expected);
  });

  it('applies maxLines correctly', () => {
    const response: DataQueryResponse = { data: [cloneDeep(inputFrame)] };

    const frame1: DataFrame = transformBackendResult(
      response,
      [
        {
          refId: 'A',
          expr: LOKI_EXPR,
        },
      ],
      []
    ).data[0];

    expect(frame1.meta?.limit).toBeUndefined();

    const frame2 = transformBackendResult(
      response,
      [
        {
          refId: 'A',
          expr: LOKI_EXPR,
          maxLines: 42,
        },
      ],
      []
    ).data[0];

    expect(frame2.meta?.limit).toBe(42);
  });

  it('processed derived fields correctly', () => {
    const input: DataFrame = {
      length: 1,
      fields: [
        {
          name: 'time',
          config: {},
          values: new ArrayVector([1]),
          type: FieldType.time,
        },
        {
          name: 'line',
          config: {},
          values: new ArrayVector(['line1']),
          type: FieldType.string,
        },
      ],
    };
    const response: DataQueryResponse = { data: [input] };
    const result = transformBackendResult(
      response,
      [{ refId: 'A', expr: '' }],
      [
        {
          matcherRegex: 'trace=(w+)',
          name: 'derived1',
          url: 'example.com',
        },
      ]
    );

    expect(
      result.data[0].fields.filter((field: Field) => field.name === 'derived1' && field.type === 'string').length
    ).toBe(1);
  });
});
