import React from 'react';
import sprite from '../../../assets/icons/sprite.svg'


type IconPropsType = {
    iconId:string;
    height?:string;
    width?:string;
    viewBox?:string;
}
export const Icon:React.FC<IconPropsType> = (props) => {
    return (
        <svg role={"graphics-document"} aria-label="icon" height={props.height || "30px"} width={props.width || "30px"} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
             viewBox={props.viewBox || "0 0 30 30"}>
            <use xlinkHref={`${sprite}#${props.iconId}`}/>
        </svg>
    );
};

