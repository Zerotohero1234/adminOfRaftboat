import React from 'react';
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataRaftboat from "./DataRaftboat"

const ListEmployee = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataRaftboat/>
      </div>
    </div>
  )
}

export default ListEmployee