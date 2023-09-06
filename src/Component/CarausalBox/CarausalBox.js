import React, { useState } from 'react';
import './CarausalBox.css';
import CD from '../CarausalDesc/CD';

export default function CarausalBox() {
  const [isCDVisible, setIsCDVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleCDVisibility = () => {
    setIsCDVisible(!isCDVisible);
    setModal(!modal);
  };

  const closeCD = () => {
    setIsCDVisible(false);
    setModal(false);
  };

  return (
    <>
      <div className="C_container">
        <div className="Carausal_Container" onClick={toggleCDVisibility}>
          <b>30 June 2023</b>
          <span>07hrs 57min</span>
          <div className="cara_pts">
            <h5 className='pts_hig'>17</h5>
            <h5 className='pts_low'>2</h5>
          </div>
        </div>
      </div>
      <div className="CB_modal">
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={closeCD}></div>
          <CD />
          <button className="close-modal" onClick={closeCD}>
           X
          </button>
        </div>
      )}
      </div>
    </>
  );
}
