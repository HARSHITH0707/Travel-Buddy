import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./desktop.css";

const Desktop = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  return (
    <div className="desktop-1">
      <div
        className="gettyimages-1216259682-2048x20-parent"
        onClick={onFrameContainerClick}
      >
        <img
          className="gettyimages-1216259682-2048x20-icon"
          alt=""
          src="/gettyimages12162596822048x2048transformed-1@2x.png"
        />
        <div className="start-your-unforgettable-journ-wrapper">
          <div
            className="start-your-unforgettable-container"
            onClick={onFrameContainerClick}
          >
            <p className="start-your-unforgettable">{`Start your unforgettable `}</p>
            <p className="start-your-unforgettable">journey with us.</p>
          </div>
        </div>
        <img className="girl-1-icon" alt="" src="/girl-1@2x.png" />
        <div className="screenshot-2024-05-08-234541-r-parent">
          <img
            className="screenshot-2024-05-08-234541-r-icon"
            alt=""
            src="/screenshot-20240508-234541removebgpreview-1@2x.png"
          />
          <div className="items">
            <div className="home">Home</div>
            <div className="home">Explore</div>
            <div className="home">Pricing</div>
            <div className="button">
              <div className="home">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;