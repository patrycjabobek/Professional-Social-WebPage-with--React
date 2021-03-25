import React, { FC } from 'react';
//import styled from 'styled-components';
import { InnerWrapper, Wrapper } from '../../styledHelpers/Components';
export const HomeDropdown: FC = () => {
    return (
        <div>
            <input type="text" />
            <h3>Platform</h3>
            <InnerWrapper>
                <div>
                    <img src="./media/icons/house.png" alt=""/>
                    <h3>Home</h3>
                </div>
                <div>
                    <img src="./media/icons/publications.svg" alt=""/>
                    <h3>Publications</h3>
                </div>
                <div>
                    <img src="./media/icons/people.svg" alt=""/>
                    <h3>People</h3>
                </div>
                <div>
                    <img src="./media/icons/entities.svg" alt=""/>
                    <h3>Entities</h3>
                </div>
                <div>
                    <img src="./media/icons/administration.svg" alt=""/>
                    <h3>Administration</h3>
                </div>
            </InnerWrapper>
            <h3>Workspaces</h3>
            <InnerWrapper>
                <div>
                    <img src="./media/icons/house.png" alt=""/>
                    <h3>Client contract</h3>
                </div>
                <div>
                    <img src="./media/icons/publications.svg" alt=""/>
                    <h3>Supplier contract</h3>
                </div>
                <div>
                    <img src="./media/icons/people.svg" alt=""/>
                    <h3>Corporate</h3>
                </div>
                <div>
                    <img src="./media/icons/entities.svg" alt=""/>
                    <h3>Group Norms</h3>
                </div>
                <div>
                    <img src="./media/icons/administration.svg" alt=""/>
                    <h3>Real estate contracts</h3>
                </div>
            </InnerWrapper>
            <h3>Account</h3>
            <InnerWrapper>
                <div>
                    <img src="" alt=""/>
                    <h3>Some name</h3>
                    <a href="#">See profile</a>
                </div>
                <div>
                    <img src="./media/icons/privacy.png" alt=""/>
                    <h3>Privacy</h3>
                </div>
                <div>
                    <img src="./media/icons/settings.png" alt=""/>
                    <h3>Settings</h3>
                </div>
            </InnerWrapper>
            <InnerWrapper>
                <img src="./media.icons/logout.png" alt=""/>
                <h3>Logout</h3>
            </InnerWrapper>
        </div>
    )}