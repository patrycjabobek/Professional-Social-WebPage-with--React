import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'; 
import { IState } from '../../reducers';
import { IPhotosReducer } from '../../reducers/photosReducer';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import { Colors } from '../../styledHelpers/Colors';
import Icon from '../Common/Icon';
import {Wrapper, InnerWrapper,  Title} from '../../styledHelpers/Components';
import EntitesFilter from './EntitiesFilter';
import EntityElement from './EntityElement';
import './entities.css';

const StyledEntities = styled.div`
    background: ${Colors.white};
    margin: 20px 20px 0 0 ;
`;
const StyledSelector = styled.select`
    background: ${Colors.blue};
    border: 5px solid transparent;
    border-radius: 3px;
    margin: 0 10px;

    color: #082f99;
`;

const OptionBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    
`;

const StyledWrapper = styled(Wrapper)`
    cursor: pointer;
    h3 {
        padding-left: 0;
        padding-right: 15px;
    }

    input[type='text'] {
        border: 1px solid ${Colors.verylightgray}
    }

    
`;
const EntitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;

`;


const StyledOptions = styled(InnerWrapper)`
    border-left: 1px solid ${Colors.verylightgray};
    cursor: pointer;
`;

const StyledInnerWrapper = styled(InnerWrapper)`
    border: 1px solid ${Colors.mediumgray}

  
`;


export const Entities: FC = (props) => {
    const handle = useFullScreenHandle();
    const [inputText, setInputText] = useState<string>("");
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    };

    const { photosList } = useSelector<IState,  IPhotosReducer>(globalState => ({
        ...globalState.photos,
    })); 

    const entitiesPhotos = [];
    
    for (let i = 0; i < 31; i++) {
        entitiesPhotos.push(photosList?.[i])
    } 
    entitiesPhotos.sort((photo1, photo2) => photo1.title.localeCompare(photo2.title));

    const [mosaic, setMosaic] = useState(false);
    const [isSorted, setSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false)
    const onClick = () => setShowFilter(!showFilter);
    const [filteredEntities] = useState(entitiesPhotos);

    
    const sortEntites = () => {
        if (isSorted === false) {
            setSort(true);
            return filteredEntities.sort((photo1, photo2) =>
            photo2.title.localeCompare(photo1.title)
            );
        } else {
            setSort(false);
            return filteredEntities.sort((photo1, photo2) =>
            photo1.title.localeCompare(photo2.title)
            );
        }
    }


    /* let titles = [
        'ABC generic company 1',
        'ABC generic company 2',
        'ABC generic company 3',
        'ABC generic company 4',
        'ABC generic company 5',
        'ABC generic company 6',
        'ABC generic company 7',
        'ABC generic company 8',
        'ABC generic company 9',
        'ABC generic company 10',
        'ABC generic company 11',
        'World company SAS 1',
        'World company SAS 2',
        'World company SAS 3',
        'World company SAS 4',
        'World company SAS 5',
        'World company SAS 6',
        'World company SAS 7',
        'World company SAS 8',
        'World company SAS 9',
        'World company SAS 10',
        'World company SAS 11',
        'Subsid Corp Ltd 1',
        'Subsid Corp Ltd 2',
        'Subsid Corp Ltd 3',
        'Subsid Corp Ltd 4',
        'Subsid Corp Ltd 5',
        'Subsid Corp Ltd 6',
        'Subsid Corp Ltd 7',
        'Subsid Corp Ltd 8',
        'Subsid Corp Ltd 9',
        'Subsid Corp Ltd 12',
    ] */

    return (
        <FullScreen handle={handle}>
            <StyledEntities>
                <OptionBar>
                    <StyledWrapper>
                        <Title>Entities</Title>
                        <Icon src="./media/icons/cog.svg"/>
                    </StyledWrapper>
                    <StyledWrapper>
                        <StyledInnerWrapper className="mosaicBtn" onClick={() => setMosaic(true)}>
                            <Icon src="./media/icons/delicious-brands.svg"/>
                            <h3>Mosaic</h3>
                        </StyledInnerWrapper>
                        <StyledInnerWrapper className="blockBtn" onClick={() => setMosaic(false)}>
                            <Icon src="./media/icons/bars-solid.svg"/>
                        </StyledInnerWrapper>
                        
                    </StyledWrapper>
                </OptionBar>
                <OptionBar>
                    <StyledWrapper>
                        <StyledSelector >
                            <option value="all" >All</option>
                            <option >All</option>
                        </StyledSelector>
                        <Icon src="./media/icons/ellipsis-h-solid.svg"></Icon>
                        <StyledOptions onClick={sortEntites}>
                            <Icon src="./media/icons/two-opposite-up-and-down-arrows-side-by-side.svg" />
                            <h3>Sort</h3>
                        </StyledOptions>
                        <StyledOptions onClick={onClick}>
                            <Icon src="./media/icons/filter-solid.svg" />
                            <h3>Filters</h3>
                        </StyledOptions>
                        <StyledOptions onClick={handle.enter}>
                            <Icon src="./media/icons/expand-alt-solid.svg" />
                        </StyledOptions>
                        <StyledOptions onClick={() => {navigator.clipboard.writeText('http://localhost:3001/entities')}}>
                            <Icon src="./media/icons/share-solid.svg" />
                            <h3>Share</h3>
                        </StyledOptions>
                    </StyledWrapper>
                    <StyledWrapper>
                        <input type="text" name="" id="" placeholder="Search..." style={{background: 'url(./media/icons/search.png) no-repeat scroll', backgroundPosition: 'right'}} value={inputText} onChange={inputHandler}/>
                        <StyledSelector >
                            <option value="all" >Followed</option>
                            <option >Mine</option>
                        </StyledSelector>
                    </StyledWrapper>
                    
                </OptionBar>
                {showFilter ? 
                    <EntitesFilter/> : null}

                {mosaic 
                    ?
                       <EntitiesContainer className="mosaic">
                        {filteredEntities.map((photo: any) => (
                            photo.title.includes(inputText) && (
                                    <EntityElement
                                        url={photo?.url}
                                        title={photo?.title}
                                    ></EntityElement>
                                )
                            ))}
                      </EntitiesContainer>
                    :
                    <EntitiesContainer className="block">
                    {filteredEntities.map((photo: any) => (
                       photo.title.includes(inputText) && (
                                <EntityElement
                                    url={photo?.url}
                                    title={photo?.title}
                                ></EntityElement>
                            )
                   ))}
                    </EntitiesContainer>
                }
                
            </StyledEntities>
        </FullScreen>
        
    )
}