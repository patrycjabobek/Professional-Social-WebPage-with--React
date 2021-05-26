import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useTable } from 'react-table';

import {TableProposals} from '../Table/TableProposals';
import Line from '../Common/Line';
import Icon from '../Common/Icon';
import {BlockContainer, MainTitle} from '../../styledHelpers/Components';

interface IProps {
    isEditable?: boolean
}

export const Proposals: FC<IProps> = (props) => {


    return (
        <BlockContainer>
            <MainTitle>Proposals</MainTitle>
            
            <TableProposals isEditable={props.isEditable}></TableProposals>
            <Link to="/test-site">See more proposals</Link>
            <Line/>
        </BlockContainer>
    )
}