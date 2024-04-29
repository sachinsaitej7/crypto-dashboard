import React, { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import TopNavBar from "@/components/TopNavBar";

const DashBoard = React.lazy(() => import("@/modules/dashboard"));
const Settings = React.lazy(() => import("@/modules/settings"));

const ModuleProvider = () => {
  const [state, setState] = useState("dashboard");
  const renderModule = () => {
    switch (state) {
      case "dashboard":
        return <DashBoard />;
      case "setting":
        return <Settings />;
      default:
        return <DashBoard />;
    }
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div className="p-16 m-auto">Loading...</div>}>
        <TopNavBar onChange={setState} />
        <div className="bg-slate-100 w-full rounded-[40px] rounded-b-none mt-[-20px] border">
          {renderModule()}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default ModuleProvider;
