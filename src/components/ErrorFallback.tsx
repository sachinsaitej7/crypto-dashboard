import React from "react";
import { Button } from "antd";

const ErrorFallback: React.FC = () => {
  return (
    <div className="p-8">
      <h1>Something went wrong</h1>
      <p>Our team has been notified and will fix it shortly</p>
      <Button
        type="primary"
        onClick={() => window.location.reload()}
        className="mt-4 min-w-[200px]"
      >
        Try Again
      </Button>
    </div>
  );
};

export default ErrorFallback;
