import React, {FC} from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { Wrapper } from '../../styledHelpers/Components';

import { TopMenu } from '../Headers/TopMenu';
import { LatestPublications } from '../MainPage/LatestPublications';
import { ResumeYourWork } from '../MainPage/ResumeYourWork';
import { Workspaces } from '../MainPage/Workspaces';
import { LeftProfile } from '../Profile/LeftProfile';


const Content = styled.div`
    max-width: 1400px;
    align-items: center;
    display: flex;
    color: ${Colors.black};
`;

const MainPage: FC = () => {
    return (
        <Wrapper>
            <TopMenu/>
            <Content>
                <LeftProfile/>
                <Wrapper>
                    <LatestPublications/>
                    <ResumeYourWork/>
                    <Workspaces/>
                </Wrapper>               
            </Content>
        </Wrapper>
    );
};

export default MainPage;