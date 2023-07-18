import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import PrivateRouter from "./PrivateRouter";
import { userColumns } from "./datatablesource";
import ListEmployee from "./pages/Employee/listEmployee";
import ListRaftboat from "./pages/Raftboat/ListRaftboat";
import NewRaftBoat from "./pages/newRaftBoat/NewRaftBoat";
import Editemployee from "./pages/new/Editemployee";
import EditRaftBoat from "./pages/newRaftBoat/EditRaftBoat";
import ListCategory from "./pages/Category/ListCategory";
import NewCategory from "./pages/newCategory/NewCategory";
import Editcategory from "./pages/newCategory/Editcategory";
import ListBooking from "./pages/Booking/ListBooking";
import BookingDetails from "./pages/BookingDetails/BookingDetails";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <Router>
          <Routes>
            <Route element={<PrivateRouter />}>
              <Route path="/" element={<Home />} index />
              <Route path="/users" element={<List columns={userColumns} />} />
              {/* Employees */}
              <Route
                path="/employees"
                element={<ListEmployee columns={userColumns} />}
              />
              <Route path="/employee/:employeeId" element={<Editemployee inputs={userInputs} title="ແກ້ໄຂປຂໍ້ມູນພະນັກງານ" />} />
              <Route
                path="employee/new"
                element={
                  <New inputs={userInputs} title="ເພີ່ມຂໍ້ມູນພະນັກງານ" />
                }
              />
              {/* RaftBoat */}
              <Route
                path="/raftBoats"
                element={<ListRaftboat columns={userColumns} />}
              />
              <Route path="/raftBoat/:raftBoatId" element={<EditRaftBoat />} />
              <Route
                path="raftBoats/new"
                element={
                  <NewRaftBoat />
                }
              />
              {/* CATEGORY */}
              <Route
                path="/categories"
                element={<ListCategory columns={userColumns} />}
              />
              <Route path="/category/:categoryId" element={<Editcategory />} />
              <Route
                path="category/new"
                element={
                  <NewCategory />
                }
              />
              {/* BOOKING */}
              <Route
                path="/bookings"
                element={<ListBooking columns={userColumns} />}
              />
              <Route path="/booking_Details/:bookingId" element={<BookingDetails />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
