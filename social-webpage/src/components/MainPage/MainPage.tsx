import React, {FC} from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';

import { TopMenu } from '../Headers/TopMenu';
import { LatestPublications } from '../MainPage/LatestPublications';
import { ResumeYourWork } from '../MainPage/ResumeYourWork';
import { Workspaces } from '../MainPage/Workspaces';
import { LeftProfile } from '../Profile/LeftProfile';
import { Publications } from '../Publications/Publications';
import { People } from '../People/People';
import { Administration } from '../Administration/Administration';
import { Entities } from '../Entities/Entities';
import { ClientContract } from '../ClientContract/ClientContract';
import { SupplierContract } from '../SupplierContract/SupplierContract';
import { Corporate } from '../Corporate/Corporate';
import { GroupNorms } from '../GroupNorms/GroupNorms';
import { RealEstateContracts } from '../RealEstateContracts/RealEstateContracts';

const Container = styled.div`
    max-width: 1400px;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: block;
    margin: auto;
    color: ${Colors.black};
`;

const Content = styled.div``;

const Main = styled.main`
    width: 80%;
    float: left;
`;

const MainPage: FC = () => {
    return (
        <Router>
            <Container>
                <TopMenu/>
                <Main>
                    <LeftProfile/>
                    <Wrapper>
                        <LatestPublications/>
                        <ResumeYourWork/>
                        <Workspaces/>
                    </Wrapper>               
                </Main>
                <Content>
                    <Switch>
                        <Route path="/publications">
                            <Publications/>
                        </Route>
                        <Route path="/people">
                            <People/>
                        </Route>
                        <Route path="/administration">
                            <Administration/>
                        </Route>
                        <Route path="/entities">
                            <Entities/>
                        </Route>
                        <Route path="client-contract">
                            <ClientContract/>
                        </Route>
                        <Route path="/supplier-contract">
                            <SupplierContract/>
                        </Route>
                        <Route path="/corporate">
                            <Corporate/>
                        </Route>
                        <Route path="/group-norms">
                            <GroupNorms/>
                        </Route>
                        <Route path="/real-estate-contracts">
                            <RealEstateContracts/>
                        </Route>
                        <Route path="/">
                            <MainPage/>
                        </Route>
                    </Switch>
                </Content>
            </Container>
        </Router>
    );
};

export default MainPage;