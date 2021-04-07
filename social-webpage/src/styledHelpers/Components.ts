import styled from 'styled-components';

export const Wrapper = styled.div`
    background: lightgrey;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const InnerWrapper = styled.div`
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content:flex-start;
    padding: 5px;
    & > h3 {
        padding-left: 15px;
    }
`;