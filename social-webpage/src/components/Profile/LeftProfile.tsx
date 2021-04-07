import React, { FC } from 'react';
import styled from 'styled-components';

import RoundAvatar from '../Common/RoundAvatar';
import Line from '../Common/Line';
import Icon from '../Common/Icon';
import { InnerWrapper } from '../../styledHelpers/Components';


import { Colors } from '../../styledHelpers/Colors';

const Aside = styled.aside`
    background: ${Colors.elephantbone};
    width: 25%;
    height: 100vh;
    &:first-child {
        padding: 5px;
    }
`;

const AsideMainContent = styled.div`    
    background: ${Colors.white};
    border: 1px solid ${Colors.verylightgray};
    padding: 20px;
    margin: 0 20px 0 20px;
    & > h2 {
        color: ${Colors.darkgrey};
    }
`;

const AsideSecondaryContent = styled(AsideMainContent)`
    background: ${Colors.elephantbone};
    border: none;
    & > div {
        background: ${Colors.elephantbone};
    }
`;
const BigAvatar = styled(RoundAvatar)`
    width: 50px;
    height: 50px;
`;

export const LeftProfile: FC = () => {
    return (
        <Aside>
            <div></div>
            <AsideMainContent>
                    <BigAvatar src='./media/images/avatar.jpg'/>
                    <h2>Patrycja Bobek</h2>
                    <h3>Job title - </h3>
                    <Line />
                    <div>
                        <InnerWrapper>
                            <Icon src='.media/icons/network.png'/>
                            <h3>Your network</h3>                           
                            <Icon src='.media/icons/user-plus.png' />                   
                        </InnerWrapper>
                        <InnerWrapper>
                            <Icon src='.media/icons/publications.png' />
                            <h3>Your publications</h3>
                            <Icon src='.media/icons/plus.png'/>
                        </InnerWrapper>
                    </div>
            </AsideMainContent>
            <AsideSecondaryContent>              
                    <InnerWrapper>
                        <Icon src='.media/icons/publications.png' />
                        <h3>Publications</h3>
                    </InnerWrapper>
                    <InnerWrapper>
                        <Icon src='.media/icons/ecosystem.png'/>
                        <h3>Ecosystem</h3>
                    </InnerWrapper>
                    <InnerWrapper>
                        <Icon src='.media/icons/entities.png'/>
                        <h3>Entities</h3>
                    </InnerWrapper>
            </AsideSecondaryContent>
        </Aside>
    )
}