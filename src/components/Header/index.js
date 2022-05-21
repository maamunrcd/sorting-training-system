import React from "react";
import "./index.scss";

const Header = (props) => {
  const {toggleModal, showModal} = props;
  return (
    <>
      <div className="header">
        <h2>Sorting Training System</h2>
        <div className="header-action-btn">
          <button className="btn-primary" onClick={() => toggleModal(!showModal)}>
            Start Sorting!
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
