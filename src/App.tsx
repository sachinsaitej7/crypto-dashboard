import { SWRConfig } from "swr";

import AuthProvider from "@/providers/AuthProvider";
import AntThemeProvider from "@/providers/AntThemeProvider";
import ModuleProvider from "./providers/ModuleProvider";

const App = () => {
  return (
    <SWRConfig
      value={{
        errorRetryCount: 3,
        errorRetryInterval: 1300,
        revalidateOnFocus: true,
        suspense: true,
      }}
    >
      <AntThemeProvider>
        <AuthProvider>
          <ModuleProvider />
        </AuthProvider>
      </AntThemeProvider>
    </SWRConfig>
  );
};

export default App;
