import "./App.css"
import {Main} from "./components/Main.tsx";
import {AsideLeft} from "./components/AsideLeft.tsx";
import {AsideRight} from "./components/AsideRight.tsx";
import styled from "styled-components";

function App() {


    return (
        <BodyWrapper>
            <AsideLeft/>
            <Main/>
            <AsideRight/>
        </BodyWrapper>
    )
}

export default App

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

`