import { useEffect } from "react";
import "./newRaftBoat.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { hotelInputs } from "../../formSource";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import { createRaftboat } from "../../Redux/Actions/raftboatActions";
import { toast } from "react-toastify";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import Toast from "../../components/loadingError/Toast";
import { RAFTBOAT_CREATE_RESET } from "../../Redux/Constants/RaftboatContants";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const NewRaftBoat = () => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [category, setCategory] = useState();
  const [loadingImg, setLoadingImg] = useState(false);

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const raftboatCreate = useSelector((state) => state.raftboatCreate);
  const { loading, error, raftboat } = raftboatCreate;

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    setLoadingImg(true);
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqficij3m/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newRaftBoat = {
        ...info,
        type: category,
        image: url,
      };

      dispatch(createRaftboat(newRaftBoat));
      setLoadingImg(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (raftboat) {
      setLoadingImg(false);
      toast.success("ເພີ່ມຂໍ້ມູນເຮືອນແພໃໝ່ເປັນທີ່ຮຽບຮ້ອຍ", ToastObjects);
      dispatch({ type: RAFTBOAT_CREATE_RESET });
      setInfo({});
      // Clear the input values
      document.querySelectorAll("input").forEach((input) => (input.value = ""));
    }
    dispatch(listCategories());
  }, [raftboat, dispatch]);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <Toast />
        <div className="top">
          <h1>ເພີ່ມຂໍ້ມູນເຮືອນແພ</h1>
        </div>
        <div>
          {error && <Message variant="alert-danger">{error}</Message>}
          {loading || (loadingImg && <Loading />)}
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

              {hotelInputs.map((input) => (
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
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories &&
                    categories.map((category) => (
                      <option key={category._id}>{category.name}</option>
                    ))}
                </select>
              </div>
              <button onClick={handleClick}>ເພີ່ມຂໍ້ມູນ</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRaftBoat;
