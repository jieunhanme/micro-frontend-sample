import { ColDef, ValueGetterParams } from "ag-grid-community";
import { useRef, useState } from "react";
import AgGrid, { GridRefObject } from "@src/@components/molecules/AgGrid";
import { CustomCellRendererProps } from "ag-grid-react";
import { Button, Select } from "antd";

type ICar = {
  make: string;
  model: string;
  price: number;
  electric: boolean;
  button: null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomButtonComponent = (props: CustomCellRendererProps) => {
  return <Button onClick={() => window.alert("clicked")}>Push Me!</Button>;
};

const Page1 = () => {
  const gridRef = useRef<GridRefObject>(null);
  // Row Data: The data to be displayed.
  const [rowData] = useState<ICar[]>([
    {
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      button: null,
    },
    {
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      button: null,
    },
    {
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      button: null,
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<ColDef<ICar>[]>([
    {
      headerName: "Make & Model",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      valueGetter: (p: ValueGetterParams<ICar>) =>
        p.data?.make + " " + p.data?.model,
    },
    {
      field: "price",
      editable: true,
      valueFormatter: (p) => "£" + Math.floor(p.value).toLocaleString(),
    },
    {
      field: "electric",
      cellRenderer: (params: CustomCellRendererProps) => {
        return (
          <Select
            defaultValue={params.data.electric}
            options={[
              { value: true, label: "TRUE" },
              { value: false, label: "FALSE" },
            ]}
          />
        );
      },
    },
    { field: "button", cellRenderer: CustomButtonComponent },
  ]);
  return (
    <main>
      <Button onClick={() => gridRef.current?.deleteRow()}>DELETE</Button>
      <Button>ADD</Button>
      <AgGrid
        ref={gridRef}
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
      />
    </main>
  );
};

export default Page1;
