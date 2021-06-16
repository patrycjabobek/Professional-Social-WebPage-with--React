import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const StyledDiv = styled.div`
    border-bottom: 2px solid ${Colors.verylightgray};
`;

class Line extends React.Component {
    render() {
        return ( 
        <StyledDiv/>
        );
    }
};

export default Line;