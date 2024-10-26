"use client"; // Mark this as a client component

import React from 'react';
import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import Table, { Column } from "@/components/UI/table"; // Adjust the import path

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'David', email: 'david@example.com', role: 'User' },
  { id: 5, name: 'Eve', email: 'eve@example.com', role: 'Admin' },
  { id: 6, name: 'Frank', email: 'frank@example.com', role: 'User' },
  { id: 7, name: 'Grace', email: 'grace@example.com', role: 'Admin' },
  { id: 8, name: 'Hannah', email: 'hannah@example.com', role: 'User' },
  { id: 9, name: 'Ivan', email: 'ivan@example.com', role: 'User' },
  { id: 10, name: 'Jack', email: 'jack@example.com', role: 'User' },
];

// Specify the columns with the correct types
const columns: Column<User>[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
];

export default function TablePage() {
  return (
    <div className="p-4 w-full">
      <ContentHeader>Users Table</ContentHeader>
      <div className="mt-4">
        <Table<User> data={users} columns={columns} />
      </div>
    </div>
  );
}
