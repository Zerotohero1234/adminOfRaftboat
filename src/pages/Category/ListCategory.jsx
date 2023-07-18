import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataCategory from './DataCategory';

const ListCategory = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataCategory/>
      </div>
    </div>
  )
}

export default ListCategory