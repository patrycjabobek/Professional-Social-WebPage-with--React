import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';

import { TopMenu } from '../Headers/TopMenu';
import { LatestPublications } from '../MainPage/LatestPublications';
import { ResumeYourWork } from '../MainPage/ResumeYourWork';
import { Workspaces } from '../MainPage/Workspaces';
import { LeftProfile } from '../Profile/LeftProfile';
import {Publications} from '../Publications/Publications';


const Content = styled.div`
    max-width: 1400px;
    align-items: center;
    font-family: sans-serif;
    display: block;
    margin: auto;
    color: ${Colors.black};
`;

const Main = styled.main`
    width: 80%;
    float: left;
`;

const MainPage: FC = () => {
    return (
        <Router>
            <Content>
                <TopMenu/>
                <Main>
                    <LeftProfile/>
                    <Wrapper>
                        <LatestPublications/>
                        <ResumeYourWork/>
                        <Workspaces/>
                    </Wrapper>
                </Main>
            </Content>
            <Switch>
                <Route path="/publications">
                    <Publications/>
                </Route>
                <Route path="/">
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    );
};

export default MainPage;