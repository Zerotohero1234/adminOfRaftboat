import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { listUser } from '../../Redux/Actions/userActions';
import { listBookings } from '../../Redux/Actions/BookingActions';
import { listRaftboat } from '../../Redux/Actions/raftboatActions';
import { listEmployee } from '../../Redux/Actions/employeeActions';

const Home = () => {

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const bookingList = useSelector((state) => state.bookingList);
  const { loading: loadingBooking, error: errorBooking, bookings } = bookingList;

  const raftboatList = useSelector((state) => state.raftboatList);
  const { loading: loadingRaftBoat, error: errorRaftBoat, raftboats } = raftboatList;

  const employeeList = useSelector((state) => state.employeeList);
  const { loading: loadingEmployee, error: errorEmployee, employees } = employeeList;

  useEffect(() => {
    dispatch(listUser())
    dispatch(listBookings())
    dispatch(listRaftboat())
    dispatch(listEmployee())
  },[dispatch])

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" users={users} loading={loading} error={error} />
          <Widget type="order" bookings={bookings} loadingBooking={loadingBooking} errorBooking={errorBooking} />
          <Widget type="raftBoat" raftboats={raftboats} loadingRaftBoat={loadingRaftBoat} errorRaftBoat={errorRaftBoat} />
          <Widget type="employee" employees={employees} loadingEmployee={loadingEmployee} errorEmployee={errorEmployee} />
        </div>
        <div className="charts">
          <Featured bookings={bookings} />
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> */}
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table bookings={bookings} loading={loadingBooking} error={errorBooking} />
        </div>
      </div>
    </div>
  )
}

export default Home