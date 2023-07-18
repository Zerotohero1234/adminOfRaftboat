import React, { useEffect } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/userActions";
import Message from "../../components/loadingError/Error";
import Loading from "../../components/loadingError/Loading";
import Toast from "../../components/loadingError/Toast";

const Login = () => {
  window.scrollTo(0, 0);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <section className="login-container">
      <Toast />
      <form className="form" onSubmit={submitHandler}>
        <p className="form-title">ລັອກອິນເພື່ອເຂົ້າສູ່ລະບົບ</p>
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <div className="input-container">
          <input
            value={email}
            type="email"
            placeholder="ອີ່ເມວ"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="ລະຫັດຜ່ານ"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-login">
          <button type="submit" className="submit">
            ລັອກອິນເພື່ອເຂົ້າສູ່ລະບົບ
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
