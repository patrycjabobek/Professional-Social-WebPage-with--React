import React, {FC, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';


import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';

import { TopMenu } from '../Headers/TopMenu';
import { LatestPublications } from '../MainPage/LatestPublications';
import { ResumeYourWork } from '../MainPage/ResumeYourWork';
import { Workspaces } from '../MainPage/Workspaces';
import { LeftProfile } from '../Profile/LeftProfile';
import {Publications} from '../Publications/Publications';

import { getUsers } from '../../actions/actionTypes/usersActions';
import { getPhotos } from '../../actions/actionTypes/photosActions';
import * as actionTypes from '../../actions/actionTypes/userTypes'

type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;

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
    float: right;
`;

const MainPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers()).then(() => {
            dispatch<GetPhotos>(getPhotos(usersList[0].id))
        });
        // eslint-disable-next-line 
    }, []);

    return (
        <Router>
            <Container>
                <TopMenu/>
                <LeftProfile/>
                <Switch>
                    <Main>                   
                        <Route path='/publications'>
                            <Publications />
                        </Route>
                        <Route path='/'>
                            <Wrapper>
                                <LatestPublications/>
                                <ResumeYourWork/>
                                <Workspaces/>
                            </Wrapper>
                            <Content>
                            
                            </Content>
                        </Route>
                    </Main>
                </Switch>
            </Container>
        </Router>
    );
};

export default MainPage;