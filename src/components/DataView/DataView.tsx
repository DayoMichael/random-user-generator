import React, { useEffect, useState, } from "react";
import { useQuery } from "react-query";
import { DataViewStyle } from "./DataViewStyles";
import Heading from "../../library/heading/Heading";
import Table from "../../library/table/Table";
import ModalView from "../../library/modal/Modal";
import { fetchData } from "../../apis";
import { getHumanDate } from "../../utils";
import { ColDef, CellClickedEvent } from "ag-grid-community";
import { Loader } from "../../library/Loader/Loader";
import { RowData } from "../../common/types";

const DataView = () => {
  const { isLoading, data, refetch } = useQuery("user-details", fetchData, {
    enabled: false,
  });
  const [rowData, setRowData] = useState<RowData[]>(data || []);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<RowData>({
    picture: {},
    name: {},
    location: {},
    email: "",
    cell: "",
    gender: "",
    dob: {},
  });

  const [columnDefs] = useState<ColDef[]>([
    {
      field: "picture",
      rowDrag: true,
      sortable: true,
      cellRenderer: (params: any) => {
        const { thumbnail } = params.data?.picture;
        return thumbnail ? (
          <img
            src={thumbnail}
            alt="Userpicture"
            style={{ width: "30px", height: "30px", borderRadius: "100%" }}
          />
        ) : null;
      },
      width: 100,
    },
    {
      field: "name",
      sortable: true,
      headerName: "Full Name",
      cellRenderer: (params: any) => {
        const { title, first, last } = params.data.name;
        return `${title} ${first} ${last}`;
      },
      width: 300,
    },
    {
      field: "email",
      filter: true,
      sortable: true,
      width: 300,
    },
    {
      field: "address",
      filter: true,
      sortable: true,
      cellRenderer: (params: any) => {
        const { city, state, country } = params.data.location;
        return `${city}, ${state}, ${country}`;
      },
      width: 350,
    },
    { field: "gender", filter: true },
    { field: "cell", sortable: true },

    {
      field: "dob",
      headerName: "Date Of Birth",
      filter: true,
      sortable: true,
      cellRenderer: (params: any) => {
        const { date } = params.data.dob;
        return `${getHumanDate(date)}`;
      },
    },
  ]);

  const selectRow = ({ data }: CellClickedEvent) => {
    setUserData(data);
    setOpenModal(!openModal);
  };

  const gridOptions = {
    columnDefs: columnDefs,
    overlayLoadingTemplate:
      '<span class="ag-overlay-loading-center">Loading...</span>',
    onGridReady: (params: any) => {
      setRowData(data);
      params.api.setRowData(data);
    },
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    setRowData(data);
  }, [data]);

  if (isLoading || !rowData) {
    return (
      <DataViewStyle>
        <Heading text={"Loading..."}  /> <Loader />
      </DataViewStyle>
    );
  }

  return (
    <DataViewStyle>
      <Heading text={"User Data View"} />
      <Table
        pagination={rowData?.length > 10}
        rowData={rowData || []}
        gridOptions={gridOptions}
        onRowClicked={selectRow}
      />

      <ModalView
        open={openModal}
        onCloseModal={() => setOpenModal(false)}
        data={userData}
      />
    </DataViewStyle>
  );
}

export default DataView;
