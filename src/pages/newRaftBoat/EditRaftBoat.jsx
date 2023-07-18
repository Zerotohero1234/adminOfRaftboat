import React, { useEffect } from "react";
import "./newRaftboat.scss";
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
import { hotelInputs } from "../../formSource";
import { editRaftboat, updateRaftboatAction } from "../../Redux/Actions/raftboatActions";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import { RAFTBOAT_UPDATE_RESET } from "../../Redux/Constants/RaftboatContants";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditRaftBoat = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [loadingImg, setLoadingImg] = useState(false);
  const [category, setCategory] = useState([]);

  const params = useParams();
  const { raftBoatId } = params;

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  console.log(categories);

  const raftboatEdit = useSelector((state) => state.raftboatEdit);
  const { loading, error, raftboat } = raftboatEdit;

  const raftboatUpdate = useSelector((state) => state.raftboatUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = raftboatUpdate;

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file ? file : raftboat.img);
    data.append("upload_preset", "upload");
    setLoadingImg(true);
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqficij3m/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const updateRaftboat = {
        ...info,
        type: category,
        image: url,
      };

      dispatch(updateRaftboatAction(updateRaftboat));
      setLoadingImg(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (successUpdate) {
      setLoadingImg(false);
      toast.success("ແກ້ໄຂຂໍ້ມູນດຮືອແພເປັນທີ່ຮຽບຮ້ອຍ", ToastObjects);
      dispatch({ type: RAFTBOAT_UPDATE_RESET });
    } else {
      if (!raftboat.name || raftboat._id !== raftBoatId) {
        dispatch(editRaftboat(raftBoatId));
        // setCategory(raftboat.type[0])
      } else {
        setInfo({ ...raftboat });
        setFile(raftboat.image)
        setCategory(raftboat.type)
      }
    }
    dispatch(listCategories());
  }, [raftboat, dispatch, raftBoatId, successUpdate]);

  console.log(category);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Toast />
        <div className="top">
          <h1>ແກ້ໄຂຂໍ້ມູນເຮືອນແພ</h1>
        </div>
        <div>
          {error && <Message variant="alert-danger">{error}</Message>}
          {errorUpdate && (
            <Message variant="alert-danger">{errorUpdate}</Message>
          )}
          {loadingImg && <Loading />}
        </div>
        {category === 0 ? (
          <Loading />
        ) : (
          <div className="bottom">
            <div className="left">
              <img
                src={file instanceof Blob ? URL.createObjectURL(file) : raftboat.image}
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

                {hotelInputs &&
                  hotelInputs.map((input) => (
                    <div className="formInput" key={input.id}>
                      <label>{input.label}</label>
                      <input
                        onChange={handleChange}
                        type={input.type}
                        placeholder={input.placeholder}
                        id={input.id}
                        defaultValue={raftboat[input.id]}
                      />
                    </div>
                  ))}
                <div className="formInput">
                  <label>Featured</label>
                  <select
                    id="featured"
                    defaultValue={raftboat.featured}
                    onChange={handleChange}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>
                <div className="formInput">
                  <label htmlFor="product_title" className="form-label">
                    ປະເພດ
                  </label>
                    <select
                    className="form-select"
                    defaultValue={category[0]}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories &&
                      categories.map((category) => (
                        <option key={category._id}>{category.name}</option>
                      ))}
                  </select>
                 
                </div>
                <button onClick={handleClick}>ແກ້ໄຂຂໍ້ມູນ</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditRaftBoat;
