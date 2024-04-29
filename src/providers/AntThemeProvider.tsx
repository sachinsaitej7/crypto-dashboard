import { ConfigProvider } from "antd";

const AntThemeProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#EF4444",
        },
        components: {
          Button: {
            colorPrimary: "#EF4444",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntThemeProvider;
