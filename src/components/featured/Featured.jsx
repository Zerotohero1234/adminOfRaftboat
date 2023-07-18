// import React from "react";
import "./featured.scss";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { NumericFormat } from "react-number-format";
const Featured = (props) => {

  const { bookings } = props
  let totalSale = 0
  if (bookings) {
    bookings.map((book) => (
      book.isPaid === true ? (totalSale = totalSale + book.bookItems[0].price) : null
    ))
  }

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">ລາຍໄດ້ທັງໝົດ</h1>
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
        {/* <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div> */}
        <p className="title">ລວມ</p>
        <p className="amount"><NumericFormat
        value={totalSale}
        displayType={"text"}
        thousandSeparator={true}
      /> ກີບ</p>
        {/* <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
