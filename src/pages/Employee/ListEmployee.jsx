import React from 'react';
import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataEmployee from "./DataEmployee"

const ListEmployee = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataEmployee/>
      </div>
    </div>
  )
}

export default ListEmployee