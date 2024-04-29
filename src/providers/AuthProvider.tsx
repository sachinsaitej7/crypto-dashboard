import React, { createContext, useContext, useState } from "react";
import { Modal } from "antd";
import ApiKeyForm from "@/components/ApiKeyForm";

interface AuthContext {
  apiKey: string | null;
  saveApiKey: (apiKey: string) => void;
  clearApiKey: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [apiKey, setApiKey] = useState<string | null>(() => {
    const apiKey = localStorage.getItem("apiKey");
    if (apiKey) window["COIN_GECKO_API_KEY"] = apiKey;
    return apiKey;
  });

  const clearApiKey = () => {
    setApiKey(null);
  };

  const saveApiKey = (apiKey: string) => {
    localStorage.setItem("apiKey", apiKey);
    setApiKey(apiKey);
  };

  if (apiKey === null) {
    return (
      <Modal title="Enter API Key" closable={false} open={true} footer={null}>
        <ApiKeyForm saveApiKey={saveApiKey} />
      </Modal>
    );
  }

  return (
    <AuthContext.Provider value={{ apiKey, saveApiKey, clearApiKey }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContext => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
