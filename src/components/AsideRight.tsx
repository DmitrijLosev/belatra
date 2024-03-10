import {AsideWrapper} from "./AsideLeft.tsx";
import moon from "../assets/image/full moon magic.png";
import crystals from "../assets/image/crystals digger.png";
import princess from "../assets/image/princess suki.png";

export const AsideRight = () => {
    return (
        <AsideWrapper>
            <img src = {moon} alt = "full moon magic"/>
            <img src = {crystals} alt = "crystals digger"/>
            <img src = {princess} alt = "princess suki"/>
        </AsideWrapper>
    );
};

