import { useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { employeeColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listEmployee,deleteEmployee } from "../../Redux/Actions/employeeActions";

const DataEmployee = () => {

  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  const employeeDelete = useSelector((state) => state.employeeDelete);
  const { error: errorDelete, success: successDelete } = employeeDelete;

  useEffect(() => {
    dispatch(listEmployee());
  }, [dispatch,successDelete]);

  const handleDelete = (id) => {
    if (window.confirm("ທ່ານໝັ້ນໃຈບໍທີ່ຈະລົບຂໍ້ມູນພະນັກງານຄົນນີ້?")) {
      dispatch(deleteEmployee(id));
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
            <Link to={`/employee/${params.row.id}`} style={{ textDecoration: "none" }}>
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
        ລາຍການພະນັກງານ
        <Link to="/employee/new" className="link">
          ເພີ່ມຂໍ້ມູນພະນັກງານ
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
            rows={employees.map((employee) => ({...employee, id: employee._id}))}
            columns={employeeColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        )}
    </div>
  );
};

export default DataEmployee;
