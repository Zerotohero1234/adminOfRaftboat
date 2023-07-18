import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataBooking from './DataBooking';

const ListBooking = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataBooking/>
      </div>
    </div>
  )
}

export default ListBooking