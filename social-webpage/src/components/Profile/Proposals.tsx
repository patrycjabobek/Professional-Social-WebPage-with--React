import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Icon from '../Common/Icon';
import {Wrapper, BigAvatar, BlockContainer, SubTitle, Title} from '../../styledHelpers/Components';

import {Table} from '../Static/Table';

export const Proposals: FC = () => {
    return (
        <BlockContainer>
            {/* tabele: input type text plus date picker ; reszta input type text*/}
            <Table/>
            <Link to="/test-site">See more proposals</Link>
        </BlockContainer>
    )
}