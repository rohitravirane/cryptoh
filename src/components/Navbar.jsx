import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/bitcoin.png";

const menu = (
  <Menu style={{ backgroundColor: "#fff" }}>
    <Menu.Item icon={<HomeOutlined />}>
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item icon={<FundOutlined />}>
      <Link to="/cryptocurrencies">Cryptocurrencies</Link>
    </Menu.Item>
    <Menu.Item icon={<MoneyCollectOutlined />}>
      <Link to="/exchanges">Exchanges</Link>
    </Menu.Item>
    <Menu.Item icon={<BulbOutlined />}>
      <Link to="/news">News</Link>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container" style={{ backgroundColor: "#fff" }}>
        <Avatar src={icon} size="large" style={{ bottom: "8px" }} />
        <Typography.Title level={2} className="logo">
          <Link to="/" style={{ color: "rgb(255, 160, 50)" }}>
            Cryptohub
          </Link>
        </Typography.Title>
      </div>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button
          className="menu-control-container"
          style={{ borderRadius: '20px' }}
        >
          <MenuOutlined className="" />
        </Button>
      </Dropdown>
      { activeMenu && (
        menu
      )}
    </div>
  );
};

export default Navbar;
