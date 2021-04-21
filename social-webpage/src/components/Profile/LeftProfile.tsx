import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; // wyciąga nam dane z reducerów
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';


import RoundAvatar from '../Common/RoundAvatar';
import Line from '../Common/Line';
import Icon from '../Common/Icon';
import { InnerWrapper } from '../../styledHelpers/Components';


import { Colors } from '../../styledHelpers/Colors';

const Aside = styled.div`
    background: ${Colors.elephantbone};
    display:flex;
    flex-direction: column;
    width: 23%;
    height: 100vh;
    padding-top: 20px;
    text-align: -webkit-center;
`;

const AsideMainContent = styled.div`    
    background: ${Colors.white};
    border: 1px solid ${Colors.verylightgray};
    padding: 10px 20px;
    width: calc(100% * 0.65);
    place-self: center;
    margin: 0 20px 0 20px;
    & > h2, h3 {
        color: ${Colors.darkgrey};
        padding: 5px 0;
    }
`;

const AsideSecondaryContent = styled(AsideMainContent)`
    background: ${Colors.elephantbone};
    border: none;
    place-self: center;
    & > div {
        background: ${Colors.elephantbone};
    }
`;


export const LeftProfile: FC = () => {
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({// jeżeli więcej to dodajemy &&
        ...globalState.users
    })); 

    return (
        <Aside>
            {usersList.length > 0 &&
                <AsideMainContent>
                    <RoundAvatar src='./media/images/avatar.jpg'/>
                    <h2>{usersList[0].name}</h2>
                    <h3>Job title - {usersList[0].company}</h3>
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
            }
            
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