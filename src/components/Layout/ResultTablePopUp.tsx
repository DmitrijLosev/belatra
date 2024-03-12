import styled, {css} from "styled-components";
import {FC, useState} from "react";
import closeButton1 from "../../assets/image/closeButton1.svg";
import closeButton2 from "../../assets/image/closeButton2.svg";
import {ResultTable} from "./ResultTable.tsx";
import {DataRowsItemType} from "../Main.tsx";

type ResultTablePopUpPopUpProps = { isShowTablePopUp: boolean, setIsShowTablePopUp: (value: boolean) => void , dataRows:DataRowsItemType[]}



export const ResultTablePopUp: FC<ResultTablePopUpPopUpProps> = ({isShowTablePopUp, setIsShowTablePopUp, dataRows}) => {
    const setIsShowPopUpHandler = () => setIsShowTablePopUp(false)
    const [hoverBtn, setHoverBtn] = useState(false)
    return (
        <HowItWorksDiv isShowPopUp={isShowTablePopUp} onClick={setIsShowPopUpHandler}>
            <HowItWorksSection>
                <TitleWrapper>
                    <Title></Title>
                    <CloseButton onMouseEnter={() => setHoverBtn(true)}
                                 onMouseLeave={() => setHoverBtn(false)}>
                        {hoverBtn ? <img src={closeButton2} alt="closeButton"/>
                            : <img src={closeButton1} alt="closeButton"/>}
                    </CloseButton>
                </TitleWrapper>
            <ResultTable dataRows = {dataRows} isPopUp={true}/>
            </HowItWorksSection>
        </HowItWorksDiv>
    );
};

const HowItWorksDiv = styled.div<{ isShowPopUp: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-1000%);


  ${props => props.isShowPopUp && css<{ isShowPopUp: boolean }>`
    transform: translateY(0);
    transition: .8s ease-in-out;
  `}

  position: fixed;
  background-color: rgba(34, 37, 37, 0.9);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

`
const HowItWorksSection = styled.section`
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  max-height: 90vh;
  @media screen and (max-width: 880px) {
    max-height: calc(100vh - 40px);
  }
  width: 760px;
  @media screen and (max-width: 880px) {
    width: calc(100vw - 40px);
  }
  border-radius: 10px;
  background-color: rgba(20, 20, 20, 0.9);
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.48);
  padding: 40px;
  @media screen and (max-width: 600px) {
    padding: 40px 20px;
  }
  @media screen and (max-width: 445px) {
    padding: 20px 0 0 0;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:25px ;
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  padding: 0;
`
const CloseButton = styled.span`
  & :hover {
    cursor: pointer;
  }
  height: 28px;
  @media screen and (max-width: 445px) {
    padding-right: 10px;
  }
`
