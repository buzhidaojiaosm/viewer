import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import RepositoriesList from "./components/RepositoriesList";
import RepositoryDetails from "./components/RepositoryDetails";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    if (!e.target.value) {
      setUsername('');
      return;
    }
    setUsername(e.target.value);
  };
  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/" element={<div>
                <h1>Github Repositories Viewer</h1>
                <input
                  placeholder="Enter Github Username"
                  value={username}
                  onChange={handleChange}
                />
                <RepositoriesList username={username} />
              </div>} />
              {/* 路径为/repo/:owner/:repoName时渲染RepositoryDetails */}
              <Route path="/repo/:owner/:repoName" element={<RepositoryDetails />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
};

export default App;