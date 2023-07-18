import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../Redux/Actions/userActions";

const Datatable = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  if(users) {
    users.filter((item) => item.isAdmin !== true)
    console.log(users);
  }

  useEffect(() => {
    dispatch(listUser())
  },[dispatch])

  const actionColumn = [
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellAction">
    //         <Link to={`/user/${params.row._id}`} style={{ textDecoration: "none" }}>
    //           <div className="viewButton">ກວດສອບຂໍ້ມູນ</div>
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">ລາຍການຜຼ້ໃຊ້ງານ</div>
      
      {users && (
        <DataGrid
          className="datagrid"
          rows={users.map((user) => ({ ...user, id: user._id }))}
          columns={userColumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      )}
    </div>
  );
};

export default Datatable;
