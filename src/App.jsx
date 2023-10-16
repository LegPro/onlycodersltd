import { useState } from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import NewsFeed from "./component/NewsFeed";
import NavBar from "./component/Navbar";
import Member from "./component/Member.jsx";
import Group from "./component/Group.jsx";
import Badge from "./component/Badge.jsx";
import Quest from "./component/Quest.jsx";
import Feed from "./component/Feed.jsx";
import Feed1 from "./component/Feed1.jsx";
import Feed2 from "./component/Feed2.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Row from "./utility/row.jsx";
import Column from "./utility/column.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Row className="col-12">
        <Column className="col-1 ">
          {" "}
          <Sidebar />{" "}
        </Column>
        <Column className="col-11">
          <Row className="col-12 mt-4">
            <Column className="col-1 mt-4"></Column>
            <Column className="col-10 mt-4">
              <NewsFeed />
            </Column>
            <Column className="col-1 mt-4"></Column>
          </Row>
          <Row className="col-12 ">
            <Column className="col-1 mt-4 "></Column>
            <Column className="d-none d-md-block d-lg-block col-md-2 col-lg-2 mt-3 p-2 ">
              <Row className="white card p-3">
                <Member />
              </Row>
              <Row className="mt-4 white card p-3">
                <Quest />
              </Row>
            </Column>
            <Column className="col-sm-10 col-md-6 col-lg-6 mt-3 p-2 ">
              <Row>
                <Feed />
              </Row>
              <Row>
                <Feed1 />
              </Row>
              <Row>
                <Feed2 />
              </Row>
            </Column>
            <Column className="d-none d-md-block d-lg-block col-md-2 col-lg-2 mt-3 p-2 ">
              <Row className="white card p-3">
                <Group />
              </Row>
              <Row className="mt-4 white card p-3">
                <Badge />
              </Row>
            </Column>
            <Column className="col-1 mt-4"></Column>
          </Row>
        </Column>
      </Row>
    </div>
  );
}

export default App;
