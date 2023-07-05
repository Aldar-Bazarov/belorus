import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Slider from "../Slider";

const MainLayout: React.FC = () => {

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout>
        <Layout>
          <Slider />
          <Layout.Content
            style={{
              padding: "10px 30px",
            }}
          >
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
