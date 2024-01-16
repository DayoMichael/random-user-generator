import React, { useMemo } from "react";
import { TableStyles } from "./TableStyles";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme


interface Picture {
    large?: string,
    medium?: string,
    thumbnail?: string
}

interface Name {
    title?: string,
    last?: string,
    first?: string
}

interface Address {
    city?: string,
    state?: string,
    country?: string
}

interface Dob {
    date?: string,
}
interface RowData {
  picture: Picture;
  name: Name;
  email: string;
  address: Address;
  cell: string;
  gender: string;
  dob: Dob;
  
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
