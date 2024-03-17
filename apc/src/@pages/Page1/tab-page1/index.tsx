import { CellValueChangedEvent, ColDef, ColGroupDef } from "ag-grid-community";
import { useCallback, useRef, useState } from "react";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import { Button, Tooltip } from "antd";
import React from "react";
import GridModal from "@src/@pages/Page1/tab-page1/GridModal";

type ICar = {
  fullName: string;
  editObj: { value: string; label: string };
  address: {
    street: string;
    city: string;
  };
  cost: number;
  trends: {
    lcl: number;
    ucl: number;
  };
};

export type Values = {
  value: string;
  label: string;
};

// NOTE 임시 데이터
const getTapPage1Data = (): { modelName: string; rowData: ICar[] } => {
  return {
    modelName: "TEST_MODEL_01",
    rowData: [
      {
        fullName: "Naomi Crist",
        editObj: { value: "*", label: "ALL" },
        address: {
          street: "872 Ivy Vista",
          city: "Sŭngjibaegam",
        },
        cost: 300,
        trends: {
          lcl: 500,
          ucl: 1500,
        },
      },
      {
        fullName: "Alex Connelly",
        editObj: { value: "*", label: "ALL" },
        address: {
          street: "7396 Ernser Mountains",
          city: "Blaby",
        },
        cost: 1000,
        trends: {
          lcl: 500,
          ucl: 1500,
        },
      },
      {
        fullName: "Stella Gaylord",
        editObj: { value: "*", label: "ALL" },
        address: {
          street: "2138 Schmitt Street",
          city: "Namp’o",
        },
        cost: 1000,
        trends: {
          lcl: 500,
          ucl: 1500,
        },
      },
      {
        fullName: "Cecil Jacobs",
        editObj: { value: "*", label: "ALL" },
        address: {
          street: "1563 Heller Manors",
          city: "Ramsey",
        },
        cost: 1000,
        trends: {
          lcl: 500,
          ucl: 1500,
        },
      },
      {
        fullName: "Olga Little",
        editObj: { value: "*", label: "ALL" },
        address: {
          street: "578 Yundt Island",
          city: "Muang Phin",
        },
        cost: 1000,
        trends: {
          lcl: 500,
          ucl: 1500,
        },
      },
    ],
  };
};

const TabPage1 = React.memo(() => {
  console.log("TAB PAGE1 RENDER");
  const [open, setOpen] = useState(false);
  // NOTE state for modal updated row
  const [editRowNode, setEditRowNode] = useState<ICar | null>(null);

  const onCreate = useCallback(
    (values: Values) => {
      console.log("Received values of form: ", values);
      if (!editRowNode) return;
      editRowNode.editObj = values;
      gridRef.current?.api.applyTransaction({ update: [editRowNode] });
      setOpen(false);
    },
    [editRowNode]
  );

  const gridRef = useRef<AgGridReact<ICar>>(null);
  // Row Data: The data to be displayed.
  const [rowData] = useState<ICar[]>(getTapPage1Data().rowData);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs] = useState<(ColDef<ICar> | ColGroupDef<ICar>)[]>([
    {
      field: "fullName",
      headerName: "Full Name",
      editable: true,
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    {
      field: "editObj",
      headerName: "Object",
      editable: false,
      valueParser: (params) => {
        return params.data.editObj;
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      cellRenderer: (params: CustomCellRendererProps) => {
        return (
          <Button
            onClick={() => {
              setOpen(true);
              setEditRowNode(params.node.data);
            }}
          >
            POPUP
          </Button>
        );
      },
    },
    {
      groupId: "address",
      headerName: "Address",
      children: [
        {
          field: "address.street",
          headerName: "Street",
          editable: true,
        },
        {
          field: "address.city",
          headerName: "City",
          editable: true,
        },
      ],
    },
    {
      field: "cost",
      headerName: "Cost",
      editable: true,
      cellRenderer: (params: CustomCellRendererProps) => {
        const cost = params.data.cost;
        const lcl = params.data.trends?.lcl;
        const ucl = params.data.trends?.ucl;
        return (
          <div>
            {cost}
            {(cost < lcl || cost > ucl) && (
              <Tooltip title="숫자 범위 에러">
                <span>❌</span>
              </Tooltip>
            )}
          </div>
        );
      },
    },
    {
      groupId: "trends",
      headerName: "Trends",
      children: [
        {
          field: "trends.lcl",
          headerName: "LCL",
          editable: true,
        },
        {
          field: "trends.ucl",
          headerName: "UCL",
          editable: true,
        },
      ],
    },
  ]);

  // const store = useStore();
  // store.sub(
  //   atom((get) => [get(derivedModelNameAtomWithRead)]),
  //   () => {
  //     const modelName = store.get(derivedModelNameAtomWithRead);
  //     console.log("TabPage1, modelName value is changed to", modelName);
  //   }
  // );

  // NOTE 셀 값 변경에 따라, 해당 row에 업데이트가 필요한 셀이 있는 경우
  const handleCellValueChanged = (
    params: CellValueChangedEvent,
    effectedColumns: string[]
  ) => {
    if (effectedColumns.includes(params.colDef.field as string)) {
      params.api.refreshCells({
        force: true,
        rowNodes: [params.node],
        columns: ["cost"],
      });
    }
  };
  const handleDeleteRow = () => {
    const gridApi = (gridRef.current as AgGridReact).api;
    const selectedRows = gridApi.getSelectedRows();
    console.log("🚀 ~ handleDeleteRow ~ selectedRows:", selectedRows);
    if (selectedRows) gridApi.applyTransaction({ remove: selectedRows });
  };
  // TODO column에서 뽑아서 newRow만들수 있는지 확인 필요(colGroupDef가 문제가 있음)
  const handleAddRow = () => {
    const gridApi = (gridRef.current as AgGridReact<ICar>).api;
    gridApi.applyTransaction({
      add: [
        {
          fullName: "",
          editObj: { value: "", label: "" },
          address: {
            street: "",
            city: "",
          },
          cost: 0,
          trends: {
            lcl: 0,
            ucl: 0,
          },
        },
      ],
    });
  };
  return (
    <>
      <Button onClick={handleDeleteRow}>DELETE</Button>
      <Button onClick={handleAddRow}>ADD</Button>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact<ICar>
          ref={gridRef}
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true}
          rowSelection="multiple"
          onCellValueChanged={(params) =>
            handleCellValueChanged(params, ["trends.lcl", "trends.ucl"])
          }
          suppressRowClickSelection={true}
        />
      </div>
      <GridModal
        open={open}
        onCreate={onCreate}
        onCancel={() => setOpen(false)}
      />
    </>
  );
});

export default TabPage1;
