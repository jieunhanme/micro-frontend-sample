import { AgGridReact, AgGridReactProps } from "ag-grid-react";
import {
  Ref,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";

export interface GridRefObject {
  getSelectedRows: () => void;
  deleteRow: () => void;
}

const AgGrid = forwardRef(
  (props: AgGridReactProps, ref: Ref<GridRefObject>) => {
    const gridRef = useRef<AgGridReact>(null);
    const getSelectedRows = useCallback(() => {
      return gridRef.current?.api.getSelectedRows();
    }, []);
    const deleteRow = useCallback(() => {
      const selectedRows = getSelectedRows();
      if (selectedRows)
        gridRef.current?.api.applyTransaction({ remove: selectedRows });
    }, [getSelectedRows]);
    useImperativeHandle(ref, () => ({ getSelectedRows, deleteRow }));

    return (
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact
          {...props}
          ref={gridRef}
          rowSelection="multiple"
          suppressRowClickSelection={true}
        />
      </div>
    );
  }
);

export default AgGrid;
