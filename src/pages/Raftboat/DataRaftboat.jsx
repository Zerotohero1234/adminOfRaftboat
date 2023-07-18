import React, { useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { raftBoatColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { deleteRaftboat, listRaftboat } from "../../Redux/Actions/raftboatActions";

const DataRaftboat = () => {

  const dispatch = useDispatch();

  const raftboatList = useSelector((state) => state.raftboatList);
  const { loading, error, raftboats } = raftboatList;

  const raftboatDelete = useSelector((state) => state.raftboatDelete);
  const { error: errorDelete, success: successDelete } = raftboatDelete;

  useEffect(() => {
    dispatch(listRaftboat());
  }, [dispatch,successDelete]);

  const handleDelete = (id) => {
    if (window.confirm("ທ່ານໝັ້ນໃຈບໍທີ່ຈະລົບຂໍ້ມູນເຮືອນແພຫຼັງນີ້?")) {
      dispatch(deleteRaftboat(id));
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/raftBoat/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">ແກ້ໄຂຂໍ້ມູນ</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              ລົບຂໍ້ມູນ
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        ລາຍການເຮືອນແພ
        <Link to="new" className="link">
          ເພີ່ມຂໍ້ມູນເຮືອນແພ
        </Link>
      </div>

      {errorDelete && (
        <Message variant="alert-danger">{errorDelete}</Message>
      )}
      {loading ? (
        <Loading/>
      ) : (
          <DataGrid
            className="datagrid"
            rows={raftboats.map((raftboat) => ({...raftboat, id: raftboat._id}))}
            columns={raftBoatColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        )}
    </div>
  );
};

export default DataRaftboat;
