import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { boolean } from "yup";

const HomePage = () => {
  const location = useLocation();
  const history = useNavigate();
  const navigate = (path) => {
    history(path);
  };

  const goBack = () => {
    history(-1);
  };

  const goForward = () => {
    history(+1);
  };

  const navigateProps = (path) => {
    history(
      {
        pathname: path,
        search: "?online=true", // Query Params
      },
      {
        state: { online: true },
      }
    );
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/profile")}>Go To Profile</button>
      <button onClick={() => navigateProps("/online-state")}>
        Go To Page with State / Query Params
      </button>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goForward}>Go Forward</button>
    </div>
  );
};

export default HomePage;
