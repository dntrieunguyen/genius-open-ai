'use client';
import React from 'react';

interface errorDashboard {
   error: Error & { digest?: string };
   reset: () => void;
}

const DashboardError: React.FC<errorDashboard> = ({ error, reset }) => {
   console.log(error);

   return <div>DashboardError</div>;
};

export default DashboardError;
