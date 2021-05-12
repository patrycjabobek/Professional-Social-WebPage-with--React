import React, { FC } from 'react';
import styled from 'styled-components';

import {Wrapper, BigAvatar, BlockContainer, SubTitle} from '../../styledHelpers/Components';

//selecty
export const MoreInformation: FC = () => {
    return (
        <div>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Expertise</SubTitle>
                </BlockContainer>
            </BlockContainer>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Specialities</SubTitle>
                </BlockContainer>
            </BlockContainer>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Addmission to practise law</SubTitle>
                </BlockContainer>
            </BlockContainer>
            <BlockContainer>
                <BlockContainer>
                    <SubTitle>Countries</SubTitle>
                </BlockContainer>
            </BlockContainer>
        </div>
    )
}