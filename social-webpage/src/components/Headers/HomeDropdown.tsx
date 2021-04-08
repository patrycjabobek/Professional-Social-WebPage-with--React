import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { InnerWrapper} from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

import Icon from '../Common/Icon';
import RoundAvatar from '../Common/RoundAvatar';
import Line from '../Common/Line';

const StyledDropdown = styled.div`
    background: ${Colors.white};
    display: block;
    position: absolute;
    top: 35px; 
    border: 2px solid ${Colors.verylightgray};
    width: 210px;
    & > input {
        margin: 5px;
        width: -webkit-fill-available;
        height: 25px;
        border: 2px solid ${Colors.verylightgray};
        border-radius: 3px;
    }
    & > input::placeholder {
        color: ${Colors.mediumgray};
    }
    & > h3 {
        padding: 5px;
        font-size: 12px;
        color: ${Colors.mediumgray};
        font-weight: bold;
    }
`;

const Styledlist = styled.div`
    color: ${Colors.darkgrey};
    font-weight: 540;
    & > h3, a {
        padding-left: 15px;
    }
`;

export const HomeDropdown: FC = () => {
    return (
        <StyledDropdown>
            <input type="text" placeholder="Filter..." />
            <h3>Platform</h3>
            <Styledlist>
                <InnerWrapper>
                    <Link to="/">
                        <Icon src='./media/icons/house.png' />
                    </Link>
                    <h3>Home</h3>
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/publications">
                        <Icon src='./media/icons/publications.png' />
                        <h3>Publications</h3>
                    </Link>
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/people">
                        <Icon src='./media/icons/people.png' />
                        <h3>People</h3>
                    </Link>                   
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/entities">
                        <Icon src='./media/icons/entities.png' />
                        <h3>Entities</h3>
                    </Link>
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/administration">
                        <Icon src='./media/icons/administration.png' />
                        <h3>Administration</h3>
                    </Link>
                </InnerWrapper>
            </Styledlist>
            <h3>Workspaces</h3>
            <Styledlist>
                <InnerWrapper>
                    <Link to="/client-contract">
                        <Icon src='./media/icons/house.png' />
                        <h3>Client contract</h3>
                    </Link>
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/supplier-contract">
                        <Icon src='./media/icons/house.png' />
                        <h3>Supplier contract</h3>
                    </Link>
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/corporate">
                        <Icon src='./media/icons/house.png' />
                        <h3>Corporate</h3>
                    </Link>
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/group-norms">
                        <Icon src='./media/icons/house.png' />
                        <h3>Group Norms</h3>
                    </Link>
                </InnerWrapper>
                <InnerWrapper>
                    <Link to="/real-estate-contracts">
                        <Icon src='./media/icons/house.png' />
                        <h3>Real estate contracts</h3>
                    </Link>
                </InnerWrapper>
            </Styledlist>
            <Line/>
            <h3>Account</h3>
            <Styledlist>
                <InnerWrapper>
                    <RoundAvatar src="./media/images/avatar.jpg"/>
                    <Styledlist>
                        <h3>Patrycja Bobek</h3>
                        <h4>See profile</h4>
                    </Styledlist>
                    
                </InnerWrapper>
                <InnerWrapper>
                    <Icon src='./media/icons/privacy.png' /> 
                    <h3>Privacy</h3>
                </InnerWrapper>
                <InnerWrapper>
                    <Icon src='./media/icons/settings.png' /> 
                    <h3>Settings</h3>
                </InnerWrapper>
            </Styledlist>
            <Line />
            <InnerWrapper>
                <Icon src='./media/icons/logout.png' /> 
                <h3>Logout</h3>
            </InnerWrapper>
        </StyledDropdown>
    )}