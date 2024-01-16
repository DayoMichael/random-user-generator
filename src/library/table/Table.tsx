import React, { useMemo, FC } from "react";
import { TableStyles } from "./TableStyles";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { FadeInUpContainer } from "../FadeInContainer/FadeInContainer";
import { RowData } from "../../common/types";

interface TableProps {
  rowData: RowData[];
  gridOptions: any;
  pagination: boolean;
  onRowClicked: (e: any) => void;
}

const Table:  FC<TableProps> = ({
  rowData,
  gridOptions,
  pagination,
  onRowClicked,
}) => {

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );

  return (
    <FadeInUpContainer>
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
            rowSelection={"single"}
          />
        </div>
      </TableStyles>
    </FadeInUpContainer>
  );
}

export default Table;
