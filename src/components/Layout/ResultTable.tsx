import styled from "styled-components";
import {Icon} from "../common/Icon/Icon.tsx";


export const ResultTable = () => {
    return (
            <Table>
                <thead>
                <HeadRow>
                    <th>Place</th>
                    <th>Player</th>
                    <th>Score</th>
                    <th>Prize</th>
                </HeadRow>
                </thead>
                <TableBody>
                <tr>
                    <td><Icon iconId={"place1"}/></td>
                    <td>Esther Howard</td>
                    <td>120092142</td>
                    <td>A$ 4000</td>
                </tr>
                <tr>
                    <td><Icon iconId={"place2"}/></td>
                    <td>Brooklyn Simmons</td>
                    <td>10912349</td>
                    <td>A$ 2000</td>
                </tr>
                <tr>
                    <td><Icon iconId={"place3"}/></td>
                    <td>Jenny Wilson</td>
                    <td>8912349</td>
                    <td>A$ 1000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Jacob Jones</td>
                    <td>733321</td>
                    <td>A$ 800</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Robert Fox</td>
                    <td>456781</td>
                    <td>A$ 700</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Devon Lane</td>
                    <td>12656</td>
                    <td>A$ 500</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Darrell Steward</td>
                    <td>2367</td>
                    <td>A$ 400</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Eleanor Pena</td>
                    <td>1209</td>
                    <td>A$ 300</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Courtney Henry</td>
                    <td>789</td>
                    <td>A$ 200</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Jane Cooper</td>
                    <td>34</td>
                    <td>A$ 100</td>
                </tr>


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