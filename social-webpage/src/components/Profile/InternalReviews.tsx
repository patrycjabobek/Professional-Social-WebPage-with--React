import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import {TableReviews} from '../Table/TableReviews';
import Line from '../Common/Line';
import Icon from '../Common/Icon';
import {BlockContainer, MainTitle} from '../../styledHelpers/Components';

interface IProps {
    isEditable?: boolean
}

export const InternalReviews: FC<IProps> = (props) => {
    return (
        <BlockContainer>
            <MainTitle>Internal Reviews</MainTitle>
            <TableReviews isEditable={props.isEditable}></TableReviews>

            <Line/>
        </BlockContainer>
    )
}