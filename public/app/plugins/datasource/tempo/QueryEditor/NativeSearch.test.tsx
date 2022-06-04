import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup';
import React from 'react';

import { TempoDatasource, TempoQuery } from '../datasource';

import NativeSearch from './NativeSearch';

const getOptions = jest.fn().mockImplementation(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          value: 'customer',
          label: 'customer',
        },
        {
          value: 'driver',
          label: 'driver',
        },
      ]);
    }, 1000);
  });
});

jest.mock('../language_provider', () => {
  return jest.fn().mockImplementation(() => {
    return { getOptions };
  });
});

const mockQuery = {
  refId: 'A',
  queryType: 'nativeSearch',
  key: 'Q-595a9bbc-2a25-49a7-9249-a52a0a475d83-0',
  serviceName: 'driver',
} as TempoQuery;

describe('NativeSearch', () => {
  let user: UserEvent;

  beforeEach(() => {
    jest.useFakeTimers();
    // Need to use delay: null here to work with fakeTimers
    // see https://github.com/testing-library/user-event/issues/833
    user = userEvent.setup({ delay: null });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should show loader when there is a delay', async () => {
    render(
      <NativeSearch datasource={{} as TempoDatasource} query={mockQuery} onChange={jest.fn()} onRunQuery={jest.fn()} />
    );

    const asyncServiceSelect = screen.getByRole('combobox', { name: 'select-span-name' });

    await user.click(asyncServiceSelect);
    const loader = screen.getByText('Loading options...');

    expect(loader).toBeInTheDocument();

    jest.advanceTimersByTime(1000);

    await waitFor(() => expect(screen.queryByText('Loading options...')).not.toBeInTheDocument());
  });

  it('should call the `onChange` function on click of the Input', async () => {
    const promise = Promise.resolve();
    const handleOnChange = jest.fn(() => promise);
    const fakeOptionChoice = {
      key: 'Q-595a9bbc-2a25-49a7-9249-a52a0a475d83-0',
      queryType: 'nativeSearch',
      refId: 'A',
      serviceName: 'driver',
      spanName: 'driver',
    };

    render(
      <NativeSearch
        datasource={{} as TempoDatasource}
        query={mockQuery}
        onChange={handleOnChange}
        onRunQuery={() => {}}
      />
    );

    const asyncServiceSelect = await screen.findByRole('combobox', { name: 'select-span-name' });

    expect(asyncServiceSelect).toBeInTheDocument();
    await user.click(asyncServiceSelect);
    jest.advanceTimersByTime(1000);

    const driverOption = await screen.findByText('driver');
    await user.click(driverOption);

    expect(handleOnChange).toHaveBeenCalledWith(fakeOptionChoice);
  });

  it('should filter the span dropdown when user types a search value', async () => {
    render(
      <NativeSearch datasource={{} as TempoDatasource} query={mockQuery} onChange={() => {}} onRunQuery={() => {}} />
    );

    const asyncServiceSelect = await screen.findByRole('combobox', { name: 'select-span-name' });

    expect(asyncServiceSelect).toBeInTheDocument();
    await user.click(asyncServiceSelect);
    jest.advanceTimersByTime(1000);

    await user.type(asyncServiceSelect, 'd');
    jest.advanceTimersByTime(1000);
    var option = await screen.findByText('driver');
    expect(option).toBeDefined();

    await user.type(asyncServiceSelect, 'a');
    jest.advanceTimersByTime(1000);
    option = await screen.findByText('No options found');
    expect(option).toBeDefined();
  });
});
