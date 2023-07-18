import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderDetails,
  isConfirmedCheckIn,
  isConfirmedCheckOut,
  isPaidBooking,
  notpaidBooking,
} from "../../Redux/Actions/BookingActions";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";
import { NumericFormat } from "react-number-format";
import { Dialog } from "@mui/material";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./Bill";

const BookingDetails = () => {
  const componentRef = useRef();
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const params = useParams();
  const { bookingId } = params;

  const bookingDetails = useSelector((state) => state.bookingDetails);
  const { loading, error, booking } = bookingDetails;

  const bookingIsPaid = useSelector((state) => state.bookingIsPaid);
  const { loading: loadingIsPaid, success: successIsPaid } = bookingIsPaid;

  const bookingNotpaid = useSelector((state) => state.bookingNotpaid);
  const { loading: loadingNotPaid, success: successNotPaid } = bookingNotpaid;

  const isConfirmed = useSelector((state) => state.isConfirmed);
  const { loading: loadingIsConfirmed, success: successIsConfirmed } =
    isConfirmed;

  const isCheckOut = useSelector((state) => state.isCheckOut);
  const { loading: loadingIsCheckOut, success: successIsCheckOut } = isCheckOut;

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const handleClickOpen = (img) => {
    setImg(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getOrderDetails(bookingId));
  }, [
    dispatch,
    bookingId,
    successIsPaid,
    successNotPaid,
    successIsConfirmed,
    successIsCheckOut,
  ]);

  const isPaidHandler = () => {
    dispatch(isPaidBooking(booking));
  };

  const notPaidHandler = () => {
    dispatch(notpaidBooking(booking));
  };

  const isComfirmedCheckInHandler = () => {
    dispatch(isConfirmedCheckIn(booking));
  };

  const isComfirmedCheckOutHandler = () => {
    dispatch(isConfirmedCheckOut(booking));
  };

  return (
    <div className="single">
      <Sidebar />
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <h1 className="title">ຂໍ້ມູນລູກຄ້າ</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">ຊື່: {booking.user.name}</h1>
                  <div className="detailItem">
                    <span className="itemKey">ອີເມວ:</span>
                    <span className="itemValue">{booking.user.email}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">ເບີໂທ:</span>
                    <span className="itemValue">{booking.user.tel}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <h1 className="title">ຂໍ້ມູນເຮືອນແພ</h1>
              <div className="item">
                <img
                  src={booking.bookItems[0].image}
                  alt="raftboat"
                  className="itemImg"
                  onClick={() => handleClickOpen(booking.bookItems[0].image)}
                />
                <div className="details">
                  <h1 className="itemTitle">
                    ຊື່ເຮືອນແພ: {booking.bookItems[0].name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="top">
              <div className="right">
                <h1 className="title">
                  ຮູບພາບໂອນເງິນຄ່າມັດຈຳ ແລະ ລາຍລະອຽດຂອງການຈອງ
                </h1>
                <div className="item">
                  <img
                    src={booking.moneySlip}
                    alt=""
                    className="itemImg"
                    onClick={() => handleClickOpen(booking.moneySlip)}
                  />
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <img src={img} height="600px" width="500px"></img>
                  </Dialog>
                  <div className="details">
                    <h1 className="itemTitle">
                      ຄ່າມັດຈຳ 20% :{" "}
                      <NumericFormat
                        value={booking.bookItems[0].deposit}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      ກີບ
                    </h1>
                    <div className="detailItem">
                      <span className="itemKey">ຈຳນວນເຮືອນແພ:</span>
                      <span className="itemValue">
                        {booking.bookItems[0].qty}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">ຈຳນວນຄົນ:</span>
                      <span className="itemValue">
                        {booking.bookItems[0].qtyPerson}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">ເຂົ້າພັກຈັກມື້:</span>
                      <span className="itemValue">
                        {dayDifference(
                          new Date(booking.checkInDate),
                          new Date(booking.checkOutDate)
                        )}{" "}
                        ມື້
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">
                        ມື້ທີ່ເຂົ້າພັກ ແລະ ມື້ເຊັກເອົ້າ:
                      </span>
                      <span className="itemValue">
                        {booking.checkInDate} ຫາ {booking.checkOutDate}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">ລວມລາຄາທັງໝົດ:</span>
                      <span className="itemValue">
                        <NumericFormat
                          value={booking.bookItems[0].price}
                          displayType={"text"}
                          thousandSeparator={true}
                        />{" "}
                        ກີບ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {loadingIsPaid && <Loading />}
            {loadingNotPaid && <Loading />}
            {loadingIsConfirmed && <Loading />}
            {loadingIsCheckOut && <Loading />}
            <div className="wrap-button-action">
              <button
                className="isPaid"
                disabled={booking.isPaid}
                onClick={isPaidHandler}
              >
                ຢືນຢັນການຊຳລະເງິນ
              </button>
              <button
                className="notPaid"
                disabled={booking.isPaid || booking.notPaid}
                onClick={notPaidHandler}
              >
                ບໍ່ພົບຂໍ້ມູນການຊຳລະເງິນ
              </button>
              <button
                className="confirmIn"
                disabled={!booking.isPaid || booking.isConfirmed}
                onClick={isComfirmedCheckInHandler}
              >
                ຢືນຢັນການເຂົ້າພັກ
              </button>
              <button
                className="confirmOut"
                disabled={!booking.isConfirmed || booking.isCheckOut}
                onClick={isComfirmedCheckOutHandler}
              >
                ຢືນຢັນການເຊັກເອົ້າອອກຫ້ອງ
              </button>
              <ReactToPrint
                trigger={() => {
                  return (
                    <button className="printBill">
                      <i className="fas fa-print"></i>
                      ປິ້ນໃບບິນ
                    </button>
                  );
                }}
                content={() => componentRef.current}
                documentTitle="ໃບບິນ"
                pageStyle="print"
              />
              <ComponentToPrint booking={booking} ref={componentRef} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
