import React, { useState } from "react";
import { Input, Button } from "antd";

const Settings: React.FC = () => {
  const [value, setValue] = useState(() => window["COIN_GECKO_API_KEY"] || "");

  return (
    <div className="w-[400px] p-12 h-screen flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <h2 className="text-lg font-semibold">API Key</h2>
      <Input.Password
        placeholder="API Key"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          window["COIN_GECKO_API_KEY"] = e.target.value;
          localStorage.setItem("apiKey", e.target.value);
        }}
      />
      <Button type="primary" onClick={() => window.location.reload()}>
        Save
      </Button>
    </div>
  );
};

export default Settings;
