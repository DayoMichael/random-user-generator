import React, { useEffect, useMemo } from "react";
import { TableStyles } from "./TableStyles";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

interface RowData {
  picture: string;
  name: string;
  email: string;
  address: string;
  cell: string;
  gender: string;
  dob: object;
  
}

interface TableProps {
  rowData: RowData[];
  gridOptions: any;
  pagination: boolean;
  onRowClicked: (e: any) => void;
  isLoading: boolean
}

function Table({ rowData, gridOptions, pagination, onRowClicked, isLoading }: TableProps) {
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );


  return (
    <TableStyles>
      <div className="ag-theme-quartz-dark" style={{ width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          gridOptions={gridOptions}
          domLayout={"autoHeight"}
          rowDragManaged={true}
          animateRows={true}
          pagination={pagination}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20, 50]}
          defaultColDef={defaultColDef}
          onRowClicked={onRowClicked}
          suppressPaginationPanel={false}
        />
      </div>
    </TableStyles>
  );
}

export default Table;
