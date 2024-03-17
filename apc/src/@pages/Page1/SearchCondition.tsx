import { ModelSearchCondition } from "@src/@types/model";
import { derivedModelSearchAtomWithWriteOnly } from "@src/states/model";
import { Button, Form, type FormProps, Select } from "antd";
import { useAtom } from "jotai";

/** TODO
 * 1. select options값 변경을 어떻게 해줄것인가 >> setState?
 * 2. url로 검색 조건이 들어왔을때 어떻게 다룰것인가
 */

type ConditionType<T> = {
  label: string;
  name: keyof T;
  rules?: { required: boolean; message: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  resetFields?: (keyof T)[];
};
const conditions: ConditionType<ModelSearchCondition>[] = [
  {
    label: "FAB",
    name: "fab",
    rules: [{ required: true, message: "" }],
    options: {
      fab: [
        { value: "01", label: "FAB_01" },
        { value: "02", label: "FAB_02" },
      ],
    },
    resetFields: [
      "area",
      "lotCd",
      "product",
      "flow",
      "operation",
      "eqpId",
      "recipeId",
    ],
  },
  {
    label: "Area",
    name: "area",
    // rules: [{ required: true, message: "" }],
    options: {
      "01": {
        area: [
          { value: "01", label: "F01_AREA_01" },
          { value: "02", label: "F01_AREA_02" },
        ],
      },
      "02": {
        area: [
          { value: "01", label: "F02_AREA_01" },
          { value: "02", label: "F02_AREA_02" },
        ],
      },
    },
    resetFields: ["operation", "eqpId", "recipeId"],
  },
  {
    label: "Lot CD",
    name: "lotCd",
    options: [],
    resetFields: ["product", "flow"],
  },
  {
    label: "Product",
    name: "product",
    options: [],
    resetFields: ["flow"],
  },

  {
    label: "Flow",
    name: "flow",
    options: [],
  },
  {
    label: "Operation",
    name: "operation",
    options: [],
  },
  {
    label: "EQP ID",
    name: "eqpId",
    // rules: [{ required: true, message: "" }],
    options: [],
    resetFields: ["recipeId"],
  },
  {
    label: "Recipe ID",
    name: "recipeId",
    // rules: [{ required: true, message: "" }],
    options: [],
  },
];

export default function SearchCondition() {
  const [, setModelSearchCondition] = useAtom(
    derivedModelSearchAtomWithWriteOnly
  );
  const [form] = Form.useForm<ModelSearchCondition>();
  console.log("SearchCondition render");

  const onFinish: FormProps<ModelSearchCondition>["onFinish"] = (values) => {
    console.log("Success:", values);
    setModelSearchCondition(values);
  };

  const onFinishFailed: FormProps<ModelSearchCondition>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  const handleValueChange: FormProps<ModelSearchCondition>["onValuesChange"] = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changedValues: Partial<ModelSearchCondition>
  ) => {
    // console.log(changedValues);
  };

  // const handleValueChange = <T,>(
  //   fieldName: keyof T,
  //   value: string,
  //   resetFields?: (keyof T)[]
  // ) => {
  //   console.log(fieldName, value, resetFields);
  //   // NOTE 영향 받는 field값 초기화
  //   resetFields &&
  //     resetFields.forEach((field) => form.setFieldValue(field, null));
  //   // NOTE update select options
  // };

  return (
    <>
      <Form
        form={form}
        name="basic"
        layout={"vertical"}
        className="flex flex-col w-full"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={handleValueChange}
        autoComplete="off"
        // initialValues={{
        //   fab: "*",
        //   area: "*",
        //   eqpId: "*",
        //   recipeId: "*",
        // }}
      >
        <div className="flex-1 p-4 overflow-auto">
          {conditions.map((item) => {
            return (
              <Form.Item<ModelSearchCondition>
                key={item.name}
                label={item.label}
                name={item.name}
                rules={item.rules}
              >
                <Select
                  options={item.options[item.name]}
                  // onChange={(value) =>
                  //   handleValueChange<ModelSearchCondition>(
                  //     item.name,
                  //     value,
                  //     item.resetFields
                  //   )
                  // }
                  allowClear
                />
              </Form.Item>
            );
          })}
        </div>
        <Form.Item className="p-4">
          <Button htmlType="submit" className="w-full">
            Search
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
