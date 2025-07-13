import React, { useMemo } from 'react';
import { useTable } from 'react-table';

export const Spreadsheet = () => {
  const data = useMemo(
    () => [
      { name: 'Alice', age: 24, role: 'Developer' },
      { name: 'Bob', age: 30, role: 'Designer' },
      { name: 'Charlie', age: 29, role: 'Manager' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg">
      <table {...getTableProps()} className="min-w-full table-fixed border">
        <thead className="bg-gray-200">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="text-left p-2 border-b border-r"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-100">
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="p-2 border-b border-r"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={() => console.log('Updated:', cell.value)}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
