import { Values } from "@src/@pages/Page1/tab-page1";
import { Form, Input, Modal } from "antd";

type GridModalProps = {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
  // initialValues: Values;
};

export default function GridModal({
  open,
  onCreate,
  onCancel,
}: GridModalProps) {
  const [form] = Form.useForm();

  const handleCreate = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onCreate(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      open={open}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      okButtonProps={{ autoFocus: true }}
      onCancel={onCancel}
      destroyOnClose
      onOk={handleCreate}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="Value"
          name="value"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="label"
          label="label"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
