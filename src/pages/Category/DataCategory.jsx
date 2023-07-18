import { useEffect } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listCategories, deleteCategory } from "../../Redux/Actions/CategoryActions";

const DataCategory = () => {

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const { error: errorDelete, success: successDelete } = categoryDelete;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch,successDelete]);

  const handleDelete = (id) => {
    if (window.confirm("ທ່ານໝັ້ນໃຈບໍທີ່ຈະລົບຂໍ້ມູນປະເພດນີ້?")) {
      dispatch(deleteCategory(id));
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
            <Link to={`/category/${params.row.id}`} style={{ textDecoration: "none" }}>
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
        ລາຍການປະເພດເຮືອນແພ
        <Link to="/category/new" className="link">
          ເພີ່ມຂໍ້ມູນປະເພດເຮືອນແພ
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
            rows={categories.map((employee) => ({...employee, id: employee._id}))}
            columns={categoryColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        )}
    </div>
  );
};

export default DataCategory;
