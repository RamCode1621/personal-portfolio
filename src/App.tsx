import React, { ReactNode } from "react";
import Header from "./components/Header/Header";
import "./common/styles/main.scss";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Home from "./pages/Home/Home";
import Youtube from "./pages/Youtube/Youtube";
import WhoAmI from "./pages/WhoAmI/WhoAmI";
import Projects from "./pages/Projects/Projects";
import Blog from "./pages/Blog/Blog";
import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyBlog from "./pages/MyBlog/MyBlog";
import Post from "./pages/Post/Post";

const Portfolio = () => (
  <>
    <Home />
    <WhoAmI />
    <WorkExperience />
    <Projects />
    <Youtube />
    <Blog />
  </>
);

const Navigation = () => (
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/blog" element={<MyBlog />} />
    <Route path="/blog/:postName" element={<Post />} />
  </Routes>
);

const App = () => (
  <Router>
    <div className="app-container">
      <Header>
        <Menu />
      </Header>
      <Main>
        <Navigation />
      </Main>
      <Sidebar />
      <Footer />
    </div>
  </Router>
);

export default App;
