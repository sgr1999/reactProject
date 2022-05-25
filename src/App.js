import "./App.css";
import Header from "./componants/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Container, Row, Col } from "reactstrap";
import Home from "./componants/Home";
import Course from "./componants/Course";
import Allcourse from "./componants/Allcourse";
import AddCourse from "./componants/AddCourse";
import { Card, CardBody } from "reactstrap";
import Menu from "./componants/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

function App() {
  const btnHandling = () => {
    toast.success("this is toast", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<Allcourse />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
