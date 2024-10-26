"use client"; // Mark this as a client component

import React, { useState } from 'react';
import ContentHeader from "@/components/contentHeader";
import Alert from "@/components/UI/alert"; // Adjust import path

export default function AlertPage() {
  const [showAlert, setShowAlert] = useState(true); // Manage alert visibility

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-4 w-full">
      <ContentHeader>Alert</ContentHeader>
      <div className="flex w-full mt-4 flex-col gap-y-2">
        {showAlert && (
          <Alert 
            type="success" 
            message="This is a success alert!" 
            onClose={handleClose} 
          />
        )}
      </div>
    </div>
  );
}
