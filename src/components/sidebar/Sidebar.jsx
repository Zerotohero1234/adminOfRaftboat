import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CategoryIcon from '@mui/icons-material/Category';
import BadgeIcon from '@mui/icons-material/Badge';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { logout } from '../../Redux/Actions/userActions';
import { useDispatch } from 'react-redux';

const Sidebar = () => {
    const dispatchRedux = useDispatch();
    const { dispatch } = useContext(DarkModeContext);

    const logoutHandler = () => {
      dispatchRedux(logout());
    };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ເຮືອນແພ</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">ລາຍການ</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>ຜູ້ໃຊ້ງານ</span>
            </li>
          </Link>
          <Link to="/employees" style={{ textDecoration: "none" }}>
            <li>
              <BadgeIcon className="icon" />
              <span>ພະນັກງານ</span>
            </li>
          </Link>
          <Link to="/raftBoats" style={{ textDecoration: "none" }}>
          <li>
            <HouseSidingIcon className="icon" />
            <span>ເຮືອນແພ</span>
          </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
          <li>
            <CategoryIcon className="icon" />
            <span>ປະເພດ</span>
          </li>
          </Link>
          <Link to="/bookings" style={{ textDecoration: "none" }}>
          <li>
            <CreditCardIcon className="icon" />
            <span>ການຈອງ</span>
          </li>
          </Link>
          <p className="title">ຜູ້ໃຊ້ງານ</p>
          {/* <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          <li>
            <ExitToAppIcon className="icon" />
            <Link onClick={logoutHandler} to="#">ອອກຈາກລະບົບ</Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  )
}

export default Sidebar