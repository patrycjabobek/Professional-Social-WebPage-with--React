import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Icon from '../Common/Icon';
import {Wrapper, BigAvatar, BlockContainer, SubTitle, Title} from '../../styledHelpers/Components';


export const PanelInformation: FC = () => {
    return (
        <BlockContainer>
            <h1>Panel Information</h1>
            <SubTitle>Hourly fee</SubTitle>
            {/* input type text */}
            <p></p>
            <SubTitle>Terms & conditions</SubTitle>  
            {/* input type text */}
            <p></p>
            {/* attachment */}
            <h1>Services & projects</h1>
            {/* input type text */}
            <p></p>
            <h1>Internal correspondants</h1>
            {/* na sztywno wszystko oprcz wyboru usera ze zdęjciem */}
        </BlockContainer>
    )
}