import { useEffect, useRef } from "react";
import type { InputRef } from "antd";
import { Form, Input, Button } from "antd";

interface ApiKeyFormProps {
  saveApiKey: (apiKey: string) => void;
}

const ApiKeyForm = ({ saveApiKey }: ApiKeyFormProps) => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form
      onFinish={(values) => {
        saveApiKey(values.apiKey);
      }}
    >
      <Form.Item
        label=''
        name='apiKey'
        rules={[{ required: true, message: "Please enter your API Key" }]}
      >
        <Input.Password placeholder='API Key' ref={inputRef} />
      </Form.Item>
      <Form.Item className='flex justify-end mb-0'>
        <Button htmlType='submit' type='primary'>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ApiKeyForm;
