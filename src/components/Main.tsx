import styled from "styled-components";
import logo from "../assets/image/logos.svg"
import banner_tournament from "../assets/image/banner_tournament.svg"
import banner from "../assets/image/banner.png"
import banner840 from "../assets/image/banner840.png"
import banner550 from "../assets/image/banner550.png"
import bannerMob from "../assets/image/bannerMob.webp"
import bizzo_casino from "../assets/image/bizzo_casino.svg"
import {Icon} from "./common/Icon/Icon.tsx";
import {ResultTable} from "./Layout/ResultTable.tsx";
import {useState} from "react";
import {HowItWorksPopUp} from "./Layout/HowItWorksPopUp.tsx";
import {ResultTablePopUp} from "./Layout/ResultTablePopUp.tsx";

export type DataRowsItemType = {
    place:"place1" | "place2" | "place3" | number
    player:string
    score:number
    prize:string}

export const Main = () => {

    const [isShowHowItWorksPopUp, setIsShowHowItWorksPopUp] = useState<boolean>(false)
    const [isShowTablePopUp,setIsShowTablePopUp] = useState(false);
    const dataRows = [
        {place:"place1", player:"Esther Howard", score:120092142, prize:"A$ 4000"},
        {place:"place2", player:"Brooklyn Simmons", score:10912349, prize:"A$ 2000"},
        {place:"place3", player:"Jenny Wilson", score:8912349, prize:"A$ 1000"},
        {place:4, player:"Jacob Jones", score:733321, prize:"A$ 800"},
        {place:5, player:"Robert Fox", score:456781, prize:"A$ 700"},
        {place:6, player:"Devon Lane", score:12656, prize:"A$ 500"},
        {place:7, player:"Darrell Steward", score:2367, prize:"A$ 400"},
        {place:8, player:"Eleanor Pena", score:1209, prize:"A$ 300"},
        {place:9, player:"Courtney Henry", score:789, prize:"A$ 200"},
        {place:10, player:"Jane Cooper", score:534, prize:"A$ 100"},
        {place:11, player:"Esther Cooper", score:484, prize:"A$ 99"},
        {place:12, player:"Courtney  Howard", score:474, prize:"A$ 91"},
        {place:13, player:"Pena Howard", score:387, prize:"A$ 70"},
        {place:14, player:"Esther Fox", score:356, prize:"A$ 70"},
        {place:15, player:"Darrell Howard", score:336, prize:"A$ 65"},
        {place:16, player:"Jenny Lane", score:316, prize:"A$ 57"},
        {place:17, player:"Esther Brooklyn", score:227, prize:"A$ 44"},
        {place:18, player:"Henry Howard", score:211, prize:"A$ 33"},
        {place:19, player:"Darrell Brooklyn", score:199, prize:"A$ 20"},
        {place:20, player:"Darrell  Henry", score:189, prize:"A$ 19"}
    ] as DataRowsItemType[]
    const menuItems: { id: string }[] = [
        {id: "facebook"},
        {id: "instagram"},
        {id: "discord"},
        {id: "youtube"},
        {id: "telegram"},
        {id: "twitter"},
        {id: "kick"}]
    return (
        <StyledMain>
            <Container>
                <BannerSection>
                    <HowItWorksPopUp isShowPopUp={isShowHowItWorksPopUp} setIsShowPopUp={setIsShowHowItWorksPopUp}/>
                    <Banner>
                        <StyledLogo src={logo} alt="logo"/>
                        <StyledBannerTournament src={banner_tournament} alt="banner tournament"/>
                        <ButtonWrapper>
                            <SignUpButton href="https://bizzocasino.com/?btag=655134_FE00454D6FF047CA9607CF7C02E650E8"
                                          target="_blank">
                                <BizzoImg src={bizzo_casino} alt="bizzo_casino"/>
                                SIGN UP NOW
                            </SignUpButton>
                            <HowWorkButton onClick={() => setIsShowHowItWorksPopUp(!isShowHowItWorksPopUp)}>
                                HOW DOES IT WORKS?
                            </HowWorkButton>
                        </ButtonWrapper>
                    </Banner>
                </BannerSection>
                <OurSocialSection>
                    <Title>Our Social</Title>
                    <SocialNavMenu>
                        <NavTitle>Follow us on:</NavTitle>
                        <StyledNav>
                            <List>
                                {menuItems.map(i => <li key={i.id}>
                                    <a href={"#"}><Icon iconId={i.id}/></a>
                                </li>)}
                            </List>
                        </StyledNav>
                    </SocialNavMenu>
                </OurSocialSection>
                <LeaderBoardSection>
                    <TitleWrapper>
                        <TabTitle>Leaderboard</TabTitle>
                        <TableUpdateDate><b>Table update date:</b>07/03/2024</TableUpdateDate>
                    </TitleWrapper>
                    <ResultTable dataRows = {dataRows}  setIsShowTablePopUp = {setIsShowTablePopUp}/>
                    <ResultTablePopUp dataRows={dataRows} isShowTablePopUp={isShowTablePopUp} setIsShowTablePopUp = {setIsShowTablePopUp}/>
                </LeaderBoardSection>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  @media screen and (max-width: 880px) {
    width: 100%;
  }
`
const Container = styled.main`
  width: 1340px;
  margin: 0 auto;
  padding: 80px 25px 25px 25px;
  @media screen and (max-width: 2100px) {
    width: 840px;
    padding: 30px 20px 60px 20px;
  }
  @media screen and (max-width: 1260px) {
    width: 600px;
  }
  @media screen and (max-width: 1023px) {
    width: 840px;
  }
  @media screen and (max-width: 880px) {
    margin: 0;
    padding: 20px;
    width: 100%;
  }
`
const BannerSection = styled.section`
`
const OurSocialSection = styled.section`
  display: flex;
  flex-direction: column;
`
const LeaderBoardSection = styled.section`
width: 100%;
`
const Banner = styled.div`
  border-radius: 10px;
  background-image: url(${banner});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 90px;
  @media screen and (max-width: 2100px) {
    background-image: url(${banner840});
    padding: 30px;
    background-repeat: no-repeat ;
    background-position: center;
    background-size: cover;
  }
  @media screen and (max-width: 1260px) {
    background-image: url(${banner550});
    gap: 20px;
  }
  @media screen and (max-width: 1023px) {
    background-image: url(${banner840});
    gap: 60px;
  }
  @media screen and (max-width: 880px) {
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
    background-image: url(${bannerMob});
    padding: 20px 15px 0 15px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 880px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 480px) {
    padding: 220px 0 20px 0;
  }
  
`

const SignUpButton = styled.a`
  max-width: 340px;
  width: 50%;
  height: 70px;
  background-color: #0041FF;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 16px;
  color: #FFF;
  font-weight: 700;
  line-height: 20px;
  transition: .3s;
  @media screen and (max-width: 880px) {
    width: 100%;
  }

  &:hover {
    background: #1752FF;
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.15);
  }
`
const HowWorkButton = styled.button`
  max-width: 340px;
  width: 50%;
  height: 70px;
  background-color: rgba(96, 96, 96, 0.63);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 20px;
  transition: .3s;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  @media screen and (max-width: 880px) {
    width: 100%;
  }
  &:hover {
    background: rgba(96, 96, 96, 0.8);
    box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.15);
  }
  
`
const StyledLogo = styled.img`
  width: 270px;
  height: 30px;

`
const StyledBannerTournament = styled.img`
  width: 400px;
  height: 115px;
  @media screen and (max-width: 480px) {
    width: 320px;
  }
  
`
const BizzoImg = styled.img`
`
const Title = styled.h3`
  padding: 8px 0 8px 5px;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  color: #FFFFFF;
  @media screen and (max-width: 480px) {
    padding: 30px 0 30px 5px;
  }
`
const SocialNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 14px;
  background-color: #1F1F1F;
  border-radius: 10px;
`
const NavTitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  margin: 0;
`
const StyledNav = styled.nav`

`
const List = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 480px) {
    gap: 18px;
  }

  & > li {
    height: 30px;
  }

  & > li:hover {
    filter: brightness(0.65);
  }

  & > li:nth-child(2) {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    border-radius: 50%;
  }
`
const TableUpdateDate = styled.p`
  display: unset;
  color: #053EFD;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding: 0 5px;
  align-self: center;
  @media screen and (max-width: 480px) {
    align-self: start;
    padding: 0 0 30px 5px;
  }

  & > b {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    padding-right: 5px;
  }
`
const TabTitle = styled(Title)`
padding:30px 0 0 5px;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    gap: 5px;
  }
`

