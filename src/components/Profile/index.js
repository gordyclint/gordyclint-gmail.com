import React from "react";
import "./style.css";
import profile from "../../images/Clint_Profile_pic_2.jpg";

function Profile(props) {
    return (
        <div className="profile text-center" style={{ marginTop: "5px", backgroundImage: `url(${profile})`}}>
            {props.children}
        </div>
    );
}

export default Profile;
