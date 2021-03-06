import React, {FC, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';


import { Colors } from '../../styledHelpers/Colors';

import { TopMenu } from '../Headers/TopMenu';
import { LatestPublications } from '../MainPage/LatestPublications';
import { ResumeYourWork } from './ResumeYourWork/ResumeYourWork';
import { WorkspacesSlider } from './WorkspacesSlider';
import { LeftProfile } from '../Profile/LeftProfile';
import { TestSite } from '../TestSite/TestSite';
import { Workspaces } from '../Workspaces/Workspaces';

import { Entities } from '../Entities/Entities';
import { Profile } from '../Profile/Profile';

import { getUsers } from '../../actions/actionTypes/usersActions';
import { getPhotos } from '../../actions/actionTypes/photosActions';
import { getPosts } from '../../actions/actionTypes/postsActions';
import { getComments } from '../../actions/actionTypes/commentsActions';
type GetUsers = ReturnType<typeof getUsers>;
type GetPhotos = ReturnType<typeof getPhotos>;
type GetPosts = ReturnType<typeof getPosts>;
type GetComments = ReturnType<typeof getComments>;

const Container = styled.div`
    max-width: 1400px;
    display: flex;
    background: ${Colors.elephantbone};
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: auto;
    color: ${Colors.black};
`;


const Main = styled.main`
    width: 80%;
    float: right;
    place-self: flex-start;

    input {
        width: max-content;
    }
`;

const Content = styled.div`
  display: block;
`;
const MainPage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<GetUsers>(getUsers()).then(() => {
            dispatch<GetPhotos>(getPhotos())
            .then(() => {
                dispatch<GetPosts>(getPosts())
                .then(() => {
                    dispatch<GetComments>(getComments())
                })
            })
        });
        // eslint-disable-next-line 
    }, []);

    return (
        <Router>
                <TopMenu/>
            <Container>
                <LeftProfile/>
                    <Main>                   
                <Switch>
                        <Route path='/test-site'>
                            <TestSite />
                        </Route>
                        
                        <Route key='client-contract'
                            exact path='/workspaces/:param'
                            component={Workspaces}
                        />

                        <Route path='/entities'>
                            <Entities />
                        </Route>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/'>
                            <Content>
                                <LatestPublications/>
                                <WorkspacesSlider/>
                                <ResumeYourWork/>
                            </Content>                         
                        </Route>
                </Switch>
                    </Main>
            </Container>
        </Router>
    );
};

export default MainPage;