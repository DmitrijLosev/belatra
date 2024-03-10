import styled from "styled-components";
import legacy from "../assets/image/legacy of doom.png";
import buffalo from "../assets/image/buffalo.png";
import catchSnatch from "../assets/image/catch & snatch.png";


export const AsideLeft = () => {
    return (
        <AsideWrapper>
            <img src = {legacy} alt = "legacy of doom"/>
            <img src = {buffalo} alt = "buffalo"/>
            <img src = {catchSnatch} alt = "catch & snatch"/>
        </AsideWrapper>
    );
};

export const AsideWrapper = styled.aside`
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 80px 0 25px 0;
  @media screen and (max-width: 2100px) {
    padding: 30px 0 60px 0;
    width: 220px;
  }
  @media screen and (max-width: 1360px) {
    width: 20%;
    max-width: 175px;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`