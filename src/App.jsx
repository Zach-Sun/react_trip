import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DownTabbar from "@/components/tabbar/DownTabbar";
import LoadingCont from "@/components/loading/LoadingCont";

const AppWrapper = styled.div`
  .content {
    position: relative;
    z-index: 9;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 50px;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <AppWrapper>
      <div className="content">
        <Outlet />
      </div>
      <DownTabbar />
      <LoadingCont />
    </AppWrapper>
  );
};

export default App;
