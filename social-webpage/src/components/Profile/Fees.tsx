import React, { FC } from 'react';


import {TableFees} from '../Table/TableFees';
import {BlockContainer, MainTitle} from '../../styledHelpers/Components';

interface IProps {
    isEditable?: boolean
}

export const Fees: FC<IProps> = (props) => {
    return (
        <BlockContainer>
            <MainTitle>Amount of fees</MainTitle>
            <TableFees isEditable={props.isEditable}></TableFees>
        </BlockContainer>
    )
}