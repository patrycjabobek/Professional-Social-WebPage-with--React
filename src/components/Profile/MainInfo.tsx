import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; // wyciąga nam dane z reducerów

import { Link } from "react-router-dom";
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';


import { Colors } from '../../styledHelpers/Colors';
import Icon from '../Common/Icon';
import Line from '../Common/Line';
import {Wrapper, BigAvatar, BlockContainer} from '../../styledHelpers/Components';
import  {ProfileTopOptions} from './ProfileTopOptions'


const ClearBothWrapper = styled(Wrapper)`
    clear: both;
    padding: 0 10px;
    margin: 20px 0;
    div {
        flex: auto
    }
`;

const AvatarContainer = styled(BlockContainer)`
    display: grid;
    width: 90px;
    a {
        text-decoration: none;
        color: ${Colors.blue}
    }
`;

const InfoContainer = styled.div`
    padding: 0 15px;
 
    h3 {
        padding: 3px;
        &:first-child {
            font-weight: 550;
        }

        &:nth-child(2) {
            font-weight: 550;
        }
    }
`;

const StyledButton = styled.button`
    border: none;
    background: none;
    float: right;
`;


export const MainInfo: FC = () => {
    const [isEditable, edit] = useState(false);
    const { photosList, currentUser } = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    })); 

    const [data, setUserData]  = useState({
        name: '',
        city: '',
        company: '',
        email: '',
        phone: '',
        phrase: '',
        url: '',
    });

    useEffect(() => {
        const userInfo = {
            name: currentUser?.name,
            city: currentUser?.address.city,
            company: currentUser?.company.name,
            email: currentUser?.email,
            phone: currentUser?.phone,
            phrase: currentUser.company.catchPhrase,
            url: photosList?.[currentUser?.id]?.url
        }
        setUserData(userInfo);
    }, [currentUser])


    return <BlockContainer>
        <ProfileTopOptions></ProfileTopOptions>
        <ClearBothWrapper>
            <AvatarContainer>
                <BigAvatar src={data.url} alt=""></BigAvatar>
                <Link to="/profile">See profile</Link>
            </AvatarContainer>
            <BlockContainer>
                <InfoContainer>
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">Name</label>
                                <input type="text" value={data?.name} onChange={e => setUserData({...data, name: e.target.value})}/>
                            </div>
                            )
                        : <h3>{data?.name}</h3>
                    }
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">Company</label>
                                <input type="text" value={data?.company} onChange={e => setUserData({...data, company: e.target.value})}/>
                            </div>
                        )
                        : <h3>{data?.company}</h3>
                    }
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">City</label>
                                <input type="text" value={data?.city} onChange={e => setUserData({...data, city: e.target.value})}/>
                            </div>
                            )
                        : <h3>{data?.city}</h3>
                    }
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">Catch phrase</label>
                                <input type="text" value={data?.phrase} onChange={e => setUserData({...data, phrase: e.target.value})}/>
                            </div>
                            )
                        : <h3>{data?.phrase}</h3>
                    }
                </InfoContainer>
            </BlockContainer>
            <BlockContainer>
            <InfoContainer>
                <StyledButton onClick={() => { return edit(!isEditable)}}>
                    <Icon src="./media/icons/pen-solid.svg"/>
                </StyledButton>
                { isEditable
                        ?   (
                                <div>
                                    <label htmlFor="">Email</label>
                                    <input type="text" value={data?.email} onChange={e => setUserData({...data, email: e.target.value})}/>
                                </div>
                            )
                        : <h3>{data?.email}</h3>
                    }
                    { isEditable
                        ?   (
                            <div>
                                <label htmlFor="">Phone</label>
                                <input type="text" value={data?.phone} onChange={e => setUserData({...data, phone: e.target.value})}/>
                            </div>
                        )
                        : <h3>{data?.phone}</h3>
                    }
            </InfoContainer>
            </BlockContainer>
        </ClearBothWrapper>
        <Line/>
    </BlockContainer>
}