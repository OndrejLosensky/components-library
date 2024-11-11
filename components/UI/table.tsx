"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Button from './Button';

interface Column<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  rowsPerPage?: number;
  variant?: 'default' | 'striped' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onRowClick?: (row: T) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

const variantClasses = {
  default: 'border border-gray-200',
  striped: 'border border-gray-200 [&>tbody>tr:nth-child(even)]:bg-gray-50',
  bordered: 'border-2 border-gray-300 [&>tbody>tr>td]:border [&>thead>tr>th]:border'
};

const paddingClasses = {
  sm: 'px-2 py-1',
  md: 'px-4 py-2',
  lg: 'px-6 py-3'
};

const Table = <T,>({ 
  data, 
  columns, 
  rowsPerPage = 10,
  variant = 'default',
  size = 'md',
  className = '',
  onRowClick,
  isLoading = false,
  emptyMessage = 'No data available'
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [sortedData, setSortedData] = useState<T[]>(data);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: 'asc' | 'desc' | null;
  }>({ key: null, direction: null });

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;

    const newDirection = 
      sortConfig.key === column.key && sortConfig.direction === 'asc' 
        ? 'desc' 
        : 'asc';

    const sorted = [...sortedData].sort((a, b) => {
      const aValue = a[column.key];
      const bValue = b[column.key];

      if (aValue < bValue) return newDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return newDirection === 'asc' ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ key: column.key, direction: newDirection });
  };

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);
  const displayedData = sortedData.slice(
    currentPage * rowsPerPage, 
    (currentPage + 1) * rowsPerPage
  );

  if (isLoading) {
    return (
      <div className="w-full h-40 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className={clsx(
          'w-full',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}>
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key as string}
                  onClick={() => handleSort(column)}
                  className={clsx(
                    paddingClasses[size],
                    'font-semibold text-left',
                    column.sortable && 'cursor-pointer hover:bg-gray-100',
                    column.className
                  )}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {column.sortable && sortConfig.key === column.key && (
                      <span className="text-gray-600">
                        {sortConfig.direction === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedData.length > 0 ? (
              displayedData.map((row, index) => (
                <tr
                  key={index}
                  onClick={() => onRowClick?.(row)}
                  className={clsx(
                    paddingClasses[size],
                    onRowClick && 'cursor-pointer hover:bg-gray-50'
                  )}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key as string}
                      className={clsx(
                        paddingClasses[size],
                        column.className
                      )}
                    >
                      {column.render 
                        ? column.render(row[column.key], row)
                        : row[column.key] as React.ReactNode}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className={clsx(
                    'text-center text-gray-500',
                    paddingClasses[size]
                  )}
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => p - 1)}
            disabled={currentPage === 0}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(p => p + 1)}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export type { Column };
export default Table;
