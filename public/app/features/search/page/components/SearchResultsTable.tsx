/* eslint-disable react/jsx-no-undef */
import { css } from '@emotion/css';
import React, { useMemo } from 'react';
import { useTable, Column, TableOptions, Cell, useAbsoluteLayout } from 'react-table';
import { FixedSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { Field, GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';
import { TableCell } from '@grafana/ui/src/components/Table/TableCell';
import { getTableStyles } from '@grafana/ui/src/components/Table/styles';

import { QueryResponse } from '../../service';
import { SelectionChecker, SelectionToggle } from '../selection';

import { generateColumns } from './columns';

export type SearchResultsProps = {
  response: QueryResponse;
  width: number;
  height: number;
  selection?: SelectionChecker;
  selectionToggle?: SelectionToggle;
  onTagSelected: (tag: string) => void;
  onDatasourceChange?: (datasource?: string) => void;
};

export type TableColumn = Column & {
  field?: Field;
};

const HEADER_HEIGHT = 36; // pixels

export const SearchResultsTable = ({
  response,
  width,
  height,
  selection,
  selectionToggle,
  onTagSelected,
  onDatasourceChange,
}: SearchResultsProps) => {
  const styles = useStyles2(getStyles);
  const tableStyles = useStyles2(getTableStyles);

  const memoizedData = useMemo(() => {
    if (!response?.view?.dataFrame.fields.length) {
      return [];
    }
    // as we only use this to fake the length of our data set for react-table we need to make sure we always return an array
    // filled with values at each index otherwise we'll end up trying to call accessRow for null|undefined value in
    // https://github.com/tannerlinsley/react-table/blob/7be2fc9d8b5e223fc998af88865ae86a88792fdb/src/hooks/useTable.js#L585
    return Array(response.totalRows).fill(0);
  }, [response]);

  // React-table column definitions
  const memoizedColumns = useMemo(() => {
    return generateColumns(response, width, selection, selectionToggle, styles, onTagSelected, onDatasourceChange);
  }, [response, width, styles, selection, selectionToggle, onTagSelected, onDatasourceChange]);

  const options: TableOptions<{}> = useMemo(
    () => ({
      columns: memoizedColumns,
      data: memoizedData,
    }),
    [memoizedColumns, memoizedData]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(options, useAbsoluteLayout);

  const RenderRow = React.useCallback(
    ({ index: rowIndex, style }) => {
      const row = rows[rowIndex];
      prepareRow(row);

      const url = response.view.fields.url?.values.get(rowIndex);
      return (
        <div {...row.getRowProps({ style })} className={styles.rowContainer}>
          {row.cells.map((cell: Cell, index: number) => {
            return (
              <TableCell
                key={index}
                tableStyles={tableStyles}
                cell={cell}
                columnIndex={index}
                columnCount={row.cells.length}
                userProps={{ href: url }}
              />
            );
          })}
        </div>
      );
    },
    [rows, prepareRow, response.view.fields.url?.values, styles.rowContainer, tableStyles]
  );

  if (!rows.length) {
    return <div className={styles.noData}>No data</div>;
  }

  return (
    <div {...getTableProps()} aria-label="Search result table" role="table">
      <div>
        {headerGroups.map((headerGroup) => {
          const { key, ...headerGroupProps } = headerGroup.getHeaderGroupProps();

          return (
            <div key={key} {...headerGroupProps} className={styles.headerRow}>
              {headerGroup.headers.map((column) => {
                const { key, ...headerProps } = column.getHeaderProps();
                return (
                  <div key={key} {...headerProps} role="columnheader" className={styles.headerCell}>
                    {column.render('Header')}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div {...getTableBodyProps()}>
        <InfiniteLoader
          isItemLoaded={response.isItemLoaded}
          itemCount={rows.length}
          loadMoreItems={response.loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <FixedSizeList
              ref={ref}
              onItemsRendered={onItemsRendered}
              height={height - HEADER_HEIGHT}
              itemCount={rows.length}
              itemSize={tableStyles.rowHeight}
              width="100%"
              style={{ overflow: 'hidden auto' }}
            >
              {RenderRow}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      </div>
    </div>
  );
};

const getStyles = (theme: GrafanaTheme2) => {
  const rowHoverBg = theme.colors.emphasize(theme.colors.background.primary, 0.03);

  return {
    noData: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,
    table: css`
      width: 100%;
    `,
    cellIcon: css`
      display: flex;
      align-items: center;
    `,
    cellWrapper: css`
      border-right: none;
      &:hover {
        box-shadow: none;
      }
    `,
    headerCell: css`
      padding-top: 2px;
      padding-left: 10px;
    `,
    headerRow: css`
      background-color: ${theme.colors.background.secondary};
      height: ${HEADER_HEIGHT}px;
      align-items: center;
    `,
    rowContainer: css`
      label: row;
      &:hover {
        background-color: ${rowHoverBg};
      }

      &:not(:hover) div[role='cell'] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `,
    typeIcon: css`
      margin-left: 5px;
      margin-right: 9.5px;
      vertical-align: middle;
      display: inline-block;
      margin-bottom: ${theme.v1.spacing.xxs};
      fill: ${theme.colors.text.secondary};
    `,
    datasourceItem: css`
      span {
        &:hover {
          color: ${theme.colors.text.link};
        }
      }
    `,
    invalidDatasourceItem: css`
      color: ${theme.colors.error.main};
      text-decoration: line-through;
    `,
    typeText: css`
      color: ${theme.colors.text.secondary};
    `,
    locationItem: css`
      color: ${theme.colors.text.secondary};
      margin-right: 12px;
    `,
    checkboxHeader: css`
      // display: flex;
      // justify-content: flex-start;
    `,
    checkbox: css`
      margin-left: 10px;
      margin-right: 10px;
      margin-top: 5px;
    `,
    infoWrap: css`
      color: ${theme.colors.text.secondary};
      span {
        margin-right: 10px;
      }
    `,
    tagList: css`
      justify-content: flex-start;
      flex-wrap: nowrap;
    `,
  };
};
