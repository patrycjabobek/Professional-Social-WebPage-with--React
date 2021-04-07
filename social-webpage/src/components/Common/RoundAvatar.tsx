import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 35px;
    height: auto;
    border-radius: 50%;
`;
const RoundAvatar = (props:any)=> (<div>
    <StyledImage src={props.src} alt=""/>
</div>)

export default RoundAvatar;