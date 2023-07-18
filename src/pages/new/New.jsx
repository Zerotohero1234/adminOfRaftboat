import { useEffect } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee } from "../../Redux/Actions/employeeActions";
import { toast } from "react-toastify";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import Toast from "../../components/loadingError/Toast";
import { EMPLOYEE_CREATE_RESET } from "../../Redux/Constants/EmployeeContants";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [loadingImg, setLoadingImg ] = useState(false);

  const dispatch = useDispatch();

  const employeeCreate = useSelector((state) => state.employeeCreate);
  const { loading, error, employee } = employeeCreate;

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    setLoadingImg(true)
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqficij3m/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newEmployee = {
        ...info,
        img: url,
      };

      dispatch(createEmployee(newEmployee));
      setLoadingImg(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (employee) {
      setLoadingImg(false)
      toast.success("ເພີ່ມຂໍ້ມູນພະນັກງານໃໝ່ເປັນທີ່ຮຽບຮ້ອຍ",ToastObjects)
      dispatch({type:EMPLOYEE_CREATE_RESET})
      setInfo({});
      // Clear the input values
      document.querySelectorAll('input').forEach(input => input.value = "");
    }
  },[employee,dispatch]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Toast/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div>
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading || loadingImg && <Loading />}
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
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
                  />
                </div>
              ))}
              <button onClick={handleClick}>ເພີ່ມຂໍ້ມູນ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
