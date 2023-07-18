import { useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { BookingColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, listBookings } from "../../Redux/Actions/BookingActions";

const DataBooking = () => {

  const dispatch = useDispatch();

  // const employeeList = useSelector((state) => state.employeeList);
  // const { loading, error, employees } = employeeList;

  const bookingList = useSelector((state) => state.bookingList);
  const { loading, error, bookings } = bookingList;

  const bookingDelete = useSelector((state) => state.bookingDelete);
  const { error: errorDelete, success: successDelete } = bookingDelete;

  useEffect(() => {
    dispatch(listBookings())
  }, [dispatch,successDelete]);

  const handleDelete = (id) => {
    if (window.confirm("ທ່ານໝັ້ນໃຈບໍທີ່ຈະລົບຂໍ້ມູນການຈອງນີ້?")) {
      dispatch(deleteBooking(id));
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
            <Link to={`/booking_Details/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">ກວດສອບຂໍ້ມູນ</div>
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
        ລາຍການການຈອງ
      </div>

      {errorDelete && (
        <Message variant="alert-danger">{errorDelete}</Message>
      )}
      {loading ? (
        <Loading/>
      ) : (
          <DataGrid
            className="datagrid"
            rows={bookings.map((employee) => ({...employee, id: employee._id}))}
            columns={BookingColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        )}
    </div>
  );
};

export default DataBooking;
