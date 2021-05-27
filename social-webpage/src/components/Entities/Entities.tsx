import React, { FC } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux'; 
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducer';

import Icon from '../Common/Icon';
import {Wrapper, InnerWrapper, BlockContainer, Title} from '../../styledHelpers/Components';

const StyledInnerWrapper = styled(InnerWrapper)`

`;
const StyledSelector = styled.select`

`;
// enitites a jsonplaceholder photos
export const Entities: FC = () => {
    const { photosList } = useSelector<IState,  IPhotosReducer>(globalState => ({
        ...globalState.photos,
    })); 

    return (
        <BlockContainer>
            <Wrapper>
                <Wrapper>
                    <Title>Entities</Title>
                    <Icon src="./media/icons/cog.svg"/>
                </Wrapper>
                <Wrapper>
                    <StyledInnerWrapper>
                        <Icon src="./media/icons/delicious-brands.svg"/>
                        <h3>Mosaic</h3>
                    </StyledInnerWrapper>
                    <StyledInnerWrapper>
                        <Icon src="./media/icons/bars-solid.svg"/>
                    </StyledInnerWrapper>
                    
                </Wrapper>
            </Wrapper>
            <Wrapper>
                <Wrapper>
                    <StyledSelector >
                        <option value="all" ><i className='far fa-dot-circle' aria-hidden='true'></i>All</option>
                        <option ><Icon src="./media/icons/dot-circle-regular.svg"/>All</option>
                    </StyledSelector>
                    <Icon src="./media/icons/ellipsis-h-solid.svg"></Icon>
                    <InnerWrapper>
                        <Icon src="./media/icons/two-opposite-up-and-down-arrows-side-by-side.svg" />
                        <h3>Sort</h3>
                    </InnerWrapper>
                    <InnerWrapper>
                        <Icon src="./media/icons/filter-solid.svg" />
                        <h3>Filters</h3>
                    </InnerWrapper>
                    <InnerWrapper>
                        <Icon src="./media/icons/expand-alt-solid.svg" />
                        <h3>Expand</h3>
                    </InnerWrapper>
                    <InnerWrapper>
                        <Icon src="./media/icons/share-solid.svg" />
                        <h3>Share</h3>
                    </InnerWrapper>
                </Wrapper>
                <Wrapper>
                    <input type="text" name="" id="" placeholder="Search..." style={{background: 'url(./media/icons/search.png) no-repeat scroll'}}/>
                    <StyledSelector >
                        <option value="all" ><i className='far fa-dot-circle' aria-hidden='true'></i>Followed</option>
                        <option ><Icon src="./media/icons/dot-circle-regular.svg"/>Mine</option>
                    </StyledSelector>
                </Wrapper>
            </Wrapper>
        </BlockContainer>
    )
}