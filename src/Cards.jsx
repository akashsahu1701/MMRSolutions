import { MoreOutlined } from "@ant-design/icons";
import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <div className="imgs-1">
        <img
          className="imgs-1"
          src="https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Yml0Y29pbnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="img"
        />
      </div>
      <div style={{ display: "flex", width: "100%", height: "10vh" }}>
        <div className="icon">
          <img
            className="imgs-2"
            src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
            alt="img"
          />
        </div>
        <div className="imgs-name">
          <div style={{ fontSize: "2.5vh" }}>
            <div>Bitcoin At ATH</div>
            <div style={{ color: "#adacac", fontSize: "1.5vh" }}>
              {" "}
              Crypto Expert
            </div>
          </div>
          <div>
            <MoreOutlined style={{ color: "#adacac", marginRight: "1vw" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
