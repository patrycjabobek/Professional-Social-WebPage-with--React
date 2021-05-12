import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Icon from '../Common/Icon';
import {Wrapper, BigAvatar, BlockContainer, SubTitle, Title} from '../../styledHelpers/Components';

export const Fees: FC = () => {
    return (
        <BlockContainer>
            <h1>Amount of fees</h1>
        </BlockContainer>
    )
}