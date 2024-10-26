"use client"; // Mark this as a client component

import React, { useState, useEffect } from 'react';

export interface Column<T> {
    key: keyof T;
    label: string;
    sortable?: boolean;
    render?: (value: T[keyof T], row: T) => React.ReactNode;
  }
  
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
}

const Table = <T,>({ data, columns, rowsPerPage = 5 }: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortedData, setSortedData] = useState<T[]>(data);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (column: Column<T>) => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    const sorted = [...sortedData].sort((a, b) => {
      const aValue = a[column.key];
      const bValue = b[column.key];

      if (aValue < bValue) return newDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setSortDirection(newDirection);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const displayedData = sortedData.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                className="border border-gray-300 px-4 py-2 cursor-pointer"
                onClick={column.sortable ? () => handleSort(column) : undefined}
              >
                {column.label}
                {column.sortable && (
                  <span className="ml-2">
                    {sortDirection === 'asc' ? '🔼' : sortDirection === 'desc' ? '🔽' : ''}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.length > 0 ? (
            displayedData.map((row, index) => (
              <tr key={index} className="border border-gray-300">
                {columns.map((column) => (
                  <td key={column.key as string} className="border border-gray-300 px-4 py-2">
                    {column.render ? column.render(row[column.key] as T[keyof T], row) : row[column.key] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="border border-gray-300 text-center px-4 py-2">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Previous
        </button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages - 1}
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
