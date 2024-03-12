import styled from "styled-components";
import {Icon} from "../common/Icon/Icon.tsx";
import React from "react";
import {DataRowsItemType} from "../Main.tsx";

type ResultTablePropsType = {
    dataRows: DataRowsItemType[]
    setIsShowTablePopUp?:(value:boolean)=>void
    isPopUp?:boolean}

export const ResultTable:React.FC<ResultTablePropsType> = ({dataRows, setIsShowTablePopUp=null, isPopUp = false}) => {

    const openFullTableHandler = ()=>{if(setIsShowTablePopUp) setIsShowTablePopUp(true)}

    const dataRowsTable = isPopUp ? dataRows: dataRows.filter((_, index) => index < 10)
    return (
            <Table onClick = {openFullTableHandler}>
                <thead>
                <HeadRow>
                    <th>Place</th>
                    <th>Player</th>
                    <th>Score</th>
                    <th>Prize</th>
                </HeadRow>
                </thead>
                <TableBody>
                    {dataRowsTable.map(u=>
                    <tr key = {u.player}>
                        <td>{u.place === "place1" || u.place === "place2" || u.place === "place3" ? <Icon iconId={u.place}/> : u.place}</td>
                        <td>{u.player}</td>
                        <td>{u.score}</td>
                        <td>{u.prize}</td>
                    </tr>
                    )}
                </TableBody>
            </Table>
    );
};

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: unset;
  text-indent: unset;
  width: 100%;
  border: none;
  
  &:hover {
    cursor: pointer;
  }

  & > * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
  }

  td,
  th {
    border: none; 
    text-align: center;
    padding: 15px;
  }

  th {
    background: #053EFD;
  }
`;

const HeadRow = styled.tr`
  & > :nth-child(1) {
    width: 75px;
    border-top-left-radius: 10px;
    text-align: start;
    padding: 15px 15px 15px 20px;
    @media screen and (max-width: 1360px) {
      width: 15%;
    }
  }

  & > :nth-child(4) {
    border-top-right-radius: 10px;
    text-align: end;
    padding: 15px 20px 15px 15px;
    width: 200px;
    @media screen and (max-width: 1360px) {
      width: 30%;
    }
  }

  & > th {
    padding: 15px;
    font-size: 14px;
    font-weight: 700;
  }
`;

const TableBody = styled.tbody`
  background: #1F1F1F;

  & > tr > :nth-child(1) {
    width: 75px;
    text-align: start;
    padding: 7px 15px 7px 20px;
    font-size: 16px;
    font-weight: 800;
    line-height: 17px;
    @media screen and (max-width: 1360px) {
      width: 15%;
    }
  }

  & > tr > :nth-child(4) {
    text-align: end;
    padding: 15px 20px 15px 15px;
    width: 200px;
    @media screen and (max-width: 1360px) {
      width: 30%;
    }
  }
  & > tr {
    font-size: 14px;
    font-weight: 500;
  }
  & > :last-child > :nth-child(1) {
    border-bottom-left-radius: 10px;
  }
  & > :last-child > :nth-child(4) {
    border-bottom-right-radius: 10px;
  }
`;