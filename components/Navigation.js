import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo-container">
        <img src="/VUU Logo 1 1.jpg" />
        <p> UNIVERSITY</p>
      </div>
      <div className="nav-container">
        <div className="input-container">
          <img src="/navigationsearch.png" />
          <input type="text" placeholder="Search Something..." />
        </div>
        <div className="navigation-rightside">
          <div className="notification-container">
            <div className="notification-icon">
              <img src="/navigationmessage.png" />
              <div className="notification-indicator"></div>
            </div>
            <div className="notification-icon">
              <img src="/navigationnotification.png" />
              <div className="notification-indicator"></div>
            </div>
          </div>
          <div className="profile">
            <img src="/profileimage.png" />
            <div className="profile-details">
              <h1>Michael Ricks</h1>
              <p>Interim Assistant Director of Undergraduate Admissions</p>
            </div>
            <img src="/belo.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
