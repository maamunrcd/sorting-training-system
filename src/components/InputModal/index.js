import React from "react";
import "./index.scss";

const InputModal = (props) => {
  const { showModal, toggleModal, showWarning, handlePeople, startSorting, people } = props;

  return (
    <>
      {showModal && (
        <div className="modal-mask">
          <div className="modal-overlay"></div>
          <div className="modal-container">
            <div className="modal-header">
              <div className="title">How many people?</div>
              <div
                className="close-icon"
                onClick={() => toggleModal(!showModal)}
              >
                x
              </div>
            </div>
            <div className="modal-body">
              <form className="input-form">
                <label htmlFor="people">
                  Enter a number of how many people you want to add to then list
                </label>
                <input type="number" onChange={(e)=>handlePeople(e)} className="input" id="people" placeholder="Add people" />
                {showWarning && (
                  <div className="warning">
                    Number of people must be between 20 and 100
                  </div>
                )}
              </form>
            </div>

            <div className="modal-footer d-flex">
              <div name="footer">
                <button
                  className="modal-button btn-seondary"
                  onClick={() => toggleModal(!showModal)}
                >
                  Cancel
                </button>
                <button onClick={()=> startSorting(people)} className="modal-button btn-primary">Start</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InputModal;
