import "./widget.scss";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import Loading from "../../components/loadingError/Loading";
import Message from "../../components/loadingError/Error";

const Widget = ({
  type,
  users,
  loading,
  error,
  bookings,
  loadingBooking,
  errorBooking,
  raftboats,
  loadingRaftBoat,
  errorRaftBoat,
  employees,
  loadingEmployee,
  errorEmployee,
}) => {
  let data;

  //temporary
  const amount = 100;
  // const diff = 20;
  switch (type) {
    case "user":
      data = {
        title: "ຜູ້ໃຊ້",
        isUser: true,
        link: "ເບິ່ງຜູ້ໃຊ້ທັງໝົດ",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ຍອດສັ່ງຈອງທັງໝົດ",
        isBooking: true,
        link: "ເບິ່ງຍອດຈອງທັງໝົດ",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "raftBoat":
      data = {
        title: "ເຮືອນແພທັງໝົດ",
        isRaftBoat: true,
        link: "ເບິ່ງເຮືອນແພທັງໝົດ",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "employee":
      data = {
        title: "ພະນັກງານທັງໝົດ",
        isEmployee: true,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <>
      {loading || loadingBooking || loadingRaftBoat || loadingEmployee ? (
        <Loading />
      ) : error || errorBooking || errorRaftBoat || errorEmployee ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="widget">
          <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
              {data.isUser && `${users.length} ຜູ້ໃຊ້`}
              {data.isBooking && `${bookings.length} ລາຍການ`}
              {data.isRaftBoat && `${raftboats.length} ຫຼັງ`}
              {data.isEmployee && `${employees.length} ຄົນ`}
            </span>
            <span className="link">{data.link}</span>
          </div>
          <div className="right">
            {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
            {data.icon}
          </div>
        </div>
      )}
    </>
  );
};

export default Widget;
