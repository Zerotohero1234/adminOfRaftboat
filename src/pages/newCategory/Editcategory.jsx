import React, { useEffect } from "react";
import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import Toast from "../../components/loadingError/Toast";
import { useParams } from "react-router-dom";
import { editCategory, updateCategory } from "../../Redux/Actions/CategoryActions";
import { CATEGORY_UPDATE_RESET } from "../../Redux/Constants/CategoryContants";
import { categoryInputs } from "../../formSource";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const Editcategory = ({ title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [loadingImg, setLoadingImg] = useState(false);

  const params = useParams();
  const { categoryId } = params;

  const dispatch = useDispatch();

  const categoryEdit = useSelector((state) => state.categoryEdit);
  const { loading, error, category } = categoryEdit;

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate;

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file ? file : category.img);
    data.append("upload_preset", "upload");
    setLoadingImg(true);
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqficij3m/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newCategory = {
        ...info,
        img: url,
      };

      dispatch(updateCategory(newCategory));
      setLoadingImg(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (successUpdate) {
      setLoadingImg(false);
      toast.success("ແກ້ໄຂຂໍ້ມູນປະເພດເຮືອນແພເປັນທີ່ຮຽບຮ້ອຍ", ToastObjects);
        dispatch({type:CATEGORY_UPDATE_RESET})
    } else {
      if (!category.name || category._id !== categoryId) {
        dispatch(editCategory(categoryId));
      } else {
        setInfo({ ...category });
      }
    }
  }, [category, dispatch, categoryId, successUpdate]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Toast />
        <div className="top">
          <h1>ແກ້ໄຂຂໍ້ມູນປະເພດເຮືອນແພ</h1>
        </div>
        <div>
          {error && <Message variant="alert-danger">{error}</Message>}
          {errorUpdate && <Message variant="alert-danger">{errorUpdate}</Message>}
          { loadingImg && <Loading />}
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : category.img} alt="" />
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

              {categoryInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    defaultValue={category[input.id]}
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

export default Editcategory;
