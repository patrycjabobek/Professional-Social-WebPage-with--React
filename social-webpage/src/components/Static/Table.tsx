import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Icon from '../Common/Icon';
import {Wrapper, BigAvatar, BlockContainer, SubTitle, Title} from '../../styledHelpers/Components';

const Header = styled.div`
    display: flex;
`;

const Data = styled.div``;

const TableRow = styled.div`
    display:flex;
`;

export const Table: FC = () => {
    return (
        <BlockContainer>
            <Header>
                <h1>Name</h1>
                <h1>Entity</h1>
                <h1>Location</h1>
                <h1>Expertise</h1>
                <h1>Date</h1>
                <h1>Firm</h1>
            </Header>
            <Data>
                <TableRow>
                    <h2>Operation</h2>
                    <h2>Renault</h2>
                    <h2>France</h2>
                    <h2>#Tax</h2>
                    <h2>20/01/2018</h2>
                    <h2>Racine</h2>
                </TableRow>
                <TableRow>
                    <h2>Operation</h2>
                    <h2>Renault</h2>
                    <h2>France</h2>
                    <h2>#Tax</h2>
                    <h2>20/01/2018</h2>
                    <h2>Racine</h2>
                </TableRow>
                <TableRow>
                    <h2>Operation</h2>
                    <h2>Renault</h2>
                    <h2>France</h2>
                    <h2>#Tax</h2>
                    <h2>20/01/2018</h2>
                    <h2>Racine</h2>
                </TableRow>
            </Data>
        </BlockContainer>
    )
}
