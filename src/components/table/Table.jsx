import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import moment from "moment";

const List = (props) => {
  const { bookings, loading, error } = props;

  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">ໄອດີ</TableCell>
              <TableCell className="tableCell">ເຮືອນແພ</TableCell>
              <TableCell className="tableCell">ຊື່ລູກຄ້າ</TableCell>
              <TableCell className="tableCell">ວັນທີ່</TableCell>
              <TableCell className="tableCell">ຈຳນວນເຮືອນແພ</TableCell>
              <TableCell className="tableCell">ຈ່າຍແລ້ວ</TableCell>
              <TableCell className="tableCell">ສະຖານະ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((row) => (
              <TableRow key={row._id}>
                <TableCell className="tableCell">{row._id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img
                      src={row.bookItems[0].image}
                      alt=""
                      className="image"
                    />
                    {row.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.user.name}</TableCell>
                <TableCell className="tableCell">
                  {moment(row.createdAt).format("MMM Do YY")}
                </TableCell>
                <TableCell className="tableCell">
                  {row.bookItems[0].qty}
                </TableCell>
                <TableCell className="tableCell">
                  {row.isPaid ? (
                    <span className="badge rounded-pill alert-success">
                      ຈ່າຍແລ້ວ
                    </span>
                  ) : (
                    <>
                      {row.notPaid ? (
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
                </TableCell>
                <TableCell className="tableCell">
                  {row.isCheckOut ? (
                    <span className="badge rounded-pill alert-checkout">
                      ເຊັກເອົ້າອອກແລ້ວ
                    </span>
                  ) : (
                    <td>
                      {row.isConfirmed ? (
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default List;
