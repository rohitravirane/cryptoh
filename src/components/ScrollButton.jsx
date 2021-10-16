import React, { useState } from "react";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div style={{ textAlign: "center", backgroundColor: '#f0f0f0' }}>
      <Button onClick={scrollToTop} style={{ outline: 'none', border: 'none', backgroundColor: '#91d5ff'}}>
        <ArrowUpOutlined />
      </Button>
    </div>
  );
};

export default ScrollButton;
