import { NumericFormat } from "react-number-format";
import moment from "moment";
import "./index.css";
export const userColumns = [
  { field: "_id", headerName: "ID", width: 230 },
  {
    field: "name",
    headerName: "ລາຍຊື່ຜູ້ໃຊ້",
    width: 230,
  },
  {
    field: "email",
    headerName: "ອີເມວ",
    width: 230,
  },
  {
    field: "tel",
    headerName: "ເບີໂທ",
    width: 230,
  },
];

export const employeeColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "ພະນັກງານ",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "ອີເມວ",
    width: 200,
  },
  {
    field: "phone",
    headerName: "ເບີໂທ",
    width: 130,
  },
  {
    field: "position",
    headerName: "ຕຳແໜ່ງ",
    width: 130,
  },
];

export const raftBoatColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "ຊື່ເຮືອແພ",
    width: 230,
  },
  {
    field: "type",
    headerName: "ປະເພດ",
    width: 100,
  },
  {
    field: "title",
    headerName: "ຫົວຂໍ້",
    width: 150,
  },
  {
    field: "price",
    headerName: "ລາຄາ",
    width: 100,
    renderCell: (params) => (
      <NumericFormat
        value={params.row.price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₭"}
      />
    ),
  },
];

export const categoryColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "ຊື່ປະເພດເຮືອແພ",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.name}
        </div>
      );
    },
  },
];

export const BookingColumns = [
  {
    field: "user",
    headerName: "ຊື່ລູກຄ້າ",
    width: 130,
    renderCell: (params) => <td>{params.row.user.name}</td>,
  },
  {
    field: "user.email",
    headerName: "ອີເມວ",
    width: 170,
    renderCell: (params) => <td>{params.row.user.email}</td>,
  },
  {
    field: "bookItems.price",
    headerName: "ລາຄາ",
    width: 150,
    renderCell: (params) => (
      <td>
        <NumericFormat
        value={params.row.bookItems[0].price}
        displayType={"text"}
        thousandSeparator={true}
      /> ກີບ
      </td>
    ),
  },
  {
    field: "isPaid",
    headerName: "ຈ່າຍແລ້ວ",
    width: 150,
    renderCell: (params) => (
      <td>
        {params.row.isPaid ? (
          <span className="badge rounded-pill alert-success">ຈ່າຍແລ້ວ</span>
        ) : (
          <>
            {params.row.notPaid ? (
              <p className="notPaid">
                <span className="badge rounded-pill alert-danger">
                  ບໍ່ພົບຂໍ້ມູນການຊຳລະເງິນ
                </span>
              </p>
            ) : (
              <span className="badge rounded-pill alert-blue">
                ລໍຖ້າການກວດສອບ
              </span>
            )}
          </>
        )}
      </td>
    ),
  },
  {
    field: "createdAt",
    headerName: "ວັນທີ່",
    width: 110,
    renderCell: (params) => (
      <td>{moment(params.row.createdAt).format("MMM Do YY")}</td>
    ),
  },
  {
    field: "isConfirmed",
    headerName: "ສະຖານະ",
    width: 150,
    renderCell: (params) => (
          <td>
            {params.row.isCheckOut  ? (
              <span className="badge rounded-pill alert-checkout">
                ເຊັກເອົ້າອອກແລ້ວ
              </span>
            ) : (
              <td>
                {params.row.isConfirmed ? (
                  <span className="badge rounded-pill alert-success">
                    ກຳລັງເຂົ້າພັກ 
                  </span>
                ) : (
                  <span className="badge rounded-pill alert-blue">
                    ລໍຖ້າຜູ້ໃຊ້ເຊັກອິນ
                  </span>
                )}
              </td>
            )}
          </td>
    ),
  },
];

//temporary data
export const userRows = [
  {
    _id: 1,
    name: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    title: "1snow@gmail.com",
    price: 35,
  },
  {
    _id: 2,
    name: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "2snow@gmail.com",
    status: "passive",
    price: 42,
  },
  {
    _id: 3,
    name: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "3snow@gmail.com",
    status: "pending",
    price: 45,
  },
  {
    _id: 4,
    name: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "4snow@gmail.com",
    status: "active",
    price: 16,
  },
  {
    _id: 5,
    name: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    _id: 6,
    name: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    _id: 7,
    name: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    _id: 8,
    name: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    _id: 9,
    name: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    _id: 10,
    name: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];
// export const userRows = [
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     age1: 35,
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "2snow@gmail.com",
//     status: "passive",
//     age: 42,
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "3snow@gmail.com",
//     status: "pending",
//     age: 45,
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "4snow@gmail.com",
//     status: "active",
//     age: 16,
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "5snow@gmail.com",
//     status: "passive",
//     age: 22,
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "6snow@gmail.com",
//     status: "active",
//     age: 15,
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "7snow@gmail.com",
//     status: "passive",
//     age: 44,
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "8snow@gmail.com",
//     status: "active",
//     age: 36,
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "pending",
//     age: 65,
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "active",
//     age: 65,
//   },
// ];
