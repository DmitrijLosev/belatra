import styled, {css} from "styled-components";
import {FC, useState} from "react";
import closeButton1 from "../../assets/image/closeButton1.svg";
import closeButton2 from "../../assets/image/closeButton2.svg";

type HowItWorksPopUpProps = { isShowPopUp: boolean, setIsShowPopUp: (value: boolean) => void }

const ArticleC: FC<{ title: string, text: string , color:boolean}> = ({title,text,color= false}) => {
    return <Article color={color}>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleText>{text}</ArticleText>
            </Article>
}


export const HowItWorksPopUp: FC<HowItWorksPopUpProps> = ({isShowPopUp, setIsShowPopUp}) => {
    const setIsShowPopUpHandler = () => setIsShowPopUp(!isShowPopUp)
    const [hoverBtn, setHoverBtn] = useState(false)
    return (
        <HowItWorksDiv isShowPopUp={isShowPopUp} onClick={setIsShowPopUpHandler}>
            <HowItWorksSection>
                <TitleWrapper>
                    <Title>How does it work?</Title>
                    <CloseButton onMouseEnter={() => setHoverBtn(true)}
                                 onMouseLeave={() => setHoverBtn(false)}>
                        {hoverBtn ? <img src={closeButton2} alt="closeButton"/>
                            : <img src={closeButton1} alt="closeButton"/>}
                    </CloseButton>
                </TitleWrapper>
                <ArticleC title={"For new users:"} text = {"Just click the \"Sign Up Now\" button, register your account and you should be eligible to enter the tournament. The most important part is to register via the button. If you don't do that, we will not be able to track your points thus you will not be eligible to enter the tournament."} color={false}/>
                <ArticleC title={"For existing users:"} text={"If you have registered via the smartpokies link then you should be automatically eligible to enter the tournament. If you have not regitered your account through the smartpokies link, you will not be able to participate as we will not be able to track your points."} color={false}/>
                <ArticleC title={"Important notice!"} text={"Please do not sign up for a new account if you already have one that is not registered via the smartpokies link. It is against the casino policy to have duplicate accounts and in such case your points will be voided and the next account in line will be granted the prize!"} color={true}/>
                <TitlePoint>How are the points counted?</TitlePoint>
                <ArticleText>The calculations are pretty simple. You just have to play Belatra games. Each dollar you spend on the Belatra games will be counted as 1 point towards your tournament points. So let's say you have wagered 50 dollars on belatra games, in this case you will have accumulated 50 points towards your tournament points. If you have wagered 300 dollars on Belatra games then you receive 300 points towards your tournament points</ArticleText>
                <ArticleC title={"Important notice!"} text={"Wagers o other provider games do not count towards your tournament points. In this case if you, for example, have played a game produced by BGaming, none of the wagers on those games will count towards your tournament points!"} color={true}/>
                <TitlePoint>How often is the leader board updated?</TitlePoint>
                <ArticleText>The leaderboard is updated once per day. So if you have played Belatra games you should see the updated leaderboard table the next day. This also means that all the gathered points on the last day of the tournament will be updated the next day (one day after the tournament has ended) so that we can have an exact amount of points for each participant.</ArticleText>
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

  &::-webkit-scrollbar {
    display: none;
  }
`
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
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
`
const Article = styled.article<{ color: boolean }>`
${props => props.color && css<{ color: boolean }>`
& > * {
  color: #FF533D ;;
}
`}

`
const ArticleTitle = styled.h4`
  margin: 0;
  padding: 25px 0;
`
const ArticleText = styled.p`
  padding: 0;
  margin: 0;
`
const TitlePoint = styled(Title)`
padding: 25px 0;
`
