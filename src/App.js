import React from "react";
import "./App.css";
import Cards from "./Cards";
import SmallCards from "./SmallCards";
import {
  BellOutlined,
  CompassOutlined,
  FundOutlined,
  HomeOutlined,
  LogoutOutlined,
  PlaySquareOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="div-1 m-1">LOLLY</div>
        <div className="div-2 m-1">
          <SearchOutlined
            style={{
              position: "absolute",
              left: "24vw",
              top: "3.5vh",
              color: "#adacac",
            }}
          />
          <input
            type="search"
            placholder="search a video"
            value="search a video"
          />
        </div>
        <div className="div-3 m-1">
          <VideoCameraAddOutlined style={{ color: "#adacac" }} />
        </div>
        <div className="div-4 m-1">
          <BellOutlined style={{ color: "#adacac" }} />
        </div>
        <div className="div-5 m-1">
          <UserOutlined style={{ color: "#adacac" }} />
        </div>
      </div>
      <div className="App">
        <div className="sidebar">
          <div className="side-buttons ">
            <HomeOutlined style={{ color: "#adacac", marginRight: "1vw" }} />{" "}
            Home
          </div>
          <div className="side-buttons">
            <CompassOutlined style={{ color: "#adacac", marginRight: "1vw" }} />
            Explore
          </div>
          <div className="side-buttons">
            <FundOutlined style={{ color: "#adacac", marginRight: "1vw" }} />{" "}
            Creator Rewards
          </div>
          <div className="side-buttons">
            <PlaySquareOutlined
              style={{ color: "#adacac", marginRight: "1vw" }}
            />
            Your Videos
          </div>
          <div className="side-buttons">
            <SettingOutlined style={{ color: "#adacac", marginRight: "1vw" }} />
            Settings
          </div>
          <div className="side-buttons bottom">
            <LogoutOutlined style={{ color: "#adacac", marginRight: "1vw" }} />
            Log Out
          </div>
        </div>
        <div className="home">
          <div className="feeds-1">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div style={{ marginLeft: "3vw", marginTop: "3vh" }}>
            Videos to Try
          </div>
          <div className="feeds-1">
            <SmallCards />
            <SmallCards />
            <SmallCards />
            <SmallCards />
            <SmallCards />
          </div>
          <div style={{ marginLeft: "3vw", marginTop: "3vh" }}>
            More You Likes To Watches .....
          </div>
          <div className="feeds-1">
            <SmallCards />
            <SmallCards />
            <SmallCards />
            <SmallCards />
            <SmallCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
