"use client";

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader";
import Alert from "@/components/UI/alert";
import { IoRocket } from "react-icons/io5";
import Link from 'next/link';

export default function AlertPage() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <div className="prose prose-gray max-w-none">
       <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
      >
        <span>Back to homepage</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 12H5m7-7l-7 7 7 7"
          />
        </svg>
      </Link>
      <ContentHeader>Alert</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Alerts are used to communicate important messages to users.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
          <Alert>
            This is a default info alert.
          </Alert>
          
          <Alert variant="success">
            Your changes have been saved successfully!
          </Alert>
          
          <Alert variant="warning">
            Please review your information before continuing.
          </Alert>
          
          <Alert variant="error">
            An error occurred while processing your request.
          </Alert>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Titles</h2>
        <p className="text-gray-600 mb-4">
          Add titles to provide more context to your alerts.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
          <Alert 
            variant="info"
            title="Update Available"
          >
            A new software update is available for your system.
          </Alert>
          
          <Alert 
            variant="success"
            title="Payment Processed"
          >
            Your payment has been processed and a receipt has been sent to your email.
          </Alert>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Icons</h2>
        <p className="text-gray-600 mb-4">
          Replace the default icons with your own.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
          <Alert 
            variant="info"
            icon={<IoRocket className="w-5 h-5 text-blue-500" />}
            title="Getting Started"
          >
            Welcome to our platform! Lets help you get started.
          </Alert>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dismissible</h2>
        <p className="text-gray-600 mb-4">
          Add a close button to allow users to dismiss the alert.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          {showDismissible && (
            <Alert 
              variant="success"
              title="Welcome!"
              closeable
              onClose={() => setShowDismissible(false)}
            >
              Thanks for joining our platform. Click the X to dismiss this message.
            </Alert>
          )}
          {!showDismissible && (
            <button
              onClick={() => setShowDismissible(true)}
              className="text-blue-500 hover:underline"
            >
              Show Alert Again
            </button>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Multi-line Content</h2>
        <p className="text-gray-600 mb-4">
          Alerts can contain multiple lines of text and other elements.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Alert 
            variant="warning"
            title="Account Security"
          >
            <p>Your password will expire in 3 days. Please update it to maintain access to your account.</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Use at least 8 characters</li>
              <li>Include numbers and special characters</li>
              <li>Do not reuse old passwords</li>
            </ul>
          </Alert>
        </div>
      </section>
    </div>
  );
}
