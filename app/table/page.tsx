"use client";

import React from 'react';
import ContentHeader from "@/components/contentHeader";
import Table, { Column } from "@/components/UI/table";
import clsx from 'clsx';

// Sample data for the examples
interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
  joinDate: string;
}

const sampleData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', joinDate: '2024-01-15' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', joinDate: '2024-02-01' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', joinDate: '2024-01-20' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'active', joinDate: '2024-02-10' },
];

const basicColumns: Column<User>[] = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Status' },
];

const advancedColumns: Column<User>[] = [
  { 
    key: 'name', 
    label: 'Name',
    sortable: true 
  },
  { 
    key: 'email', 
    label: 'Email',
    sortable: true 
  },
  { 
    key: 'status', 
    label: 'Status',
    render: (value) => (
      <span className={clsx(
        'px-2 py-1 rounded-full text-sm',
        value === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      )}>
        {value}
      </span>
    )
  },
  { 
    key: 'joinDate', 
    label: 'Join Date',
    sortable: true,
    render: (value) => new Date(value as string).toLocaleDateString()
  },
];

export default function TablePage() {
  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Table</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Tables are used to organize and display data in a structured format.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Table<User>
            data={sampleData}
            columns={basicColumns}
            variant="default"
            size="md"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          Tables come in different variants to match your design needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Default</h3>
            <Table<User>
              data={sampleData}
              columns={basicColumns}
              variant="default"
              size="md"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Striped</h3>
            <Table<User>
              data={sampleData}
              columns={basicColumns}
              variant="striped"
              size="md"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Bordered</h3>
            <Table<User>
              data={sampleData}
              columns={basicColumns}
              variant="bordered"
              size="md"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Tables can be rendered in different sizes.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-2">Small</h3>
            <Table<User>
              data={sampleData}
              columns={basicColumns}
              size="sm"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Medium (Default)</h3>
            <Table<User>
              data={sampleData}
              columns={basicColumns}
              size="md"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Large</h3>
            <Table<User>
              data={sampleData}
              columns={basicColumns}
              size="lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
        <p className="text-gray-600 mb-4">
          Tables support sorting, custom rendering, and row actions.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Table<User>
            data={sampleData}
            columns={advancedColumns}
            variant="striped"
            size="md"
            onRowClick={(row) => alert(`Clicked row with ID: ${row.id}`)}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Loading State</h2>
        <p className="text-gray-600 mb-4">
          Tables display a loading indicator while data is being fetched.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Table<User>
            data={[]}
            columns={basicColumns}
            isLoading={true}
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Empty State</h2>
        <p className="text-gray-600 mb-4">
          Tables show a message when there is no data to display.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Table<User>
            data={[]}
            columns={basicColumns}
            emptyMessage="No users found"
          />
        </div>
      </section>
    </div>
  );
}
