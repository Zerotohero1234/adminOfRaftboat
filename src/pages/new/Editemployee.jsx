import React, { useEffect } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  editEmployee, updateEmployeeAction,
} from "../../Redux/Actions/employeeActions";
import { toast } from "react-toastify";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import Toast from "../../components/loadingError/Toast";
import { useParams } from "react-router-dom";
import { EMPLOYEE_UPDATE_RESET } from "../../Redux/Constants/EmployeeContants";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const Editemployee = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [loadingImg, setLoadingImg] = useState(false);

  const params = useParams();
  const { employeeId } = params;

  const dispatch = useDispatch();

  const employeeEdit = useSelector((state) => state.employeeEdit);
  const { loading, error, employee } = employeeEdit;

  const employeeUpdate = useSelector((state) => state.employeeUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = employeeUpdate;

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file ? file : employee.img);
    data.append("upload_preset", "upload");
    setLoadingImg(true);
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqficij3m/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const updateEmployee = {
        ...info,
        img: url,
      };

      dispatch(updateEmployeeAction(updateEmployee));
      setLoadingImg(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (successUpdate) {
      setLoadingImg(false);
      toast.success("ແກ້ໄຂຂໍ້ມູນພະນັກງານເປັນທີ່ຮຽບຮ້ອຍ", ToastObjects);
        dispatch({type:EMPLOYEE_UPDATE_RESET})
    } else {
      if (!employee.name || employee._id !== employeeId) {
        dispatch(editEmployee(employeeId));
      } else {
        setInfo({ ...employee });
      }
    }
  }, [employee, dispatch, employeeId, successUpdate]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Toast />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div>
          {error && <Message variant="alert-danger">{error}</Message>}
          {errorUpdate && <Message variant="alert-danger">{errorUpdate}</Message>}
          { loadingImg && <Loading />}
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : employee.img} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  ຮູບພາບ: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    defaultValue={employee[input.id]}
                  />
                </div>
              ))}
              <button onClick={handleClick}>ແກ້ໄຂຂໍ້ມູນ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editemployee;
