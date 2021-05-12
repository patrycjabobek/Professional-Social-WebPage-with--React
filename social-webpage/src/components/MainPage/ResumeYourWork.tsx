import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { IState } from '../../reducers';
import { IUsersReducer } from '../../reducers/usersReducer';
import { IPhotosReducer } from '../../reducers/photosReducer';
import { ICommentsReducer } from '../../reducers/commentsReducer';
import { IPostsReducer } from '../../reducers/postsReducer';


import { Colors } from '../../styledHelpers/Colors';
import Icon from '../Common/Icon';
import { Wrapper, Title, BlockContainer, InnerWrapper, Text, ImageContainer } from '../../styledHelpers/Components';
const StyledWrapper = styled(Wrapper)`
    justify-content: space-between;

    input {
        background: url(./media/icons/search.png) no-repeat scroll ${Colors.white};
        height: 30px;
        font-size: 15px;
        background-position: right;
        border: 2px solid #ebe9e9;
        border-radius: 3px;
        margin-left: 450px;
        
    }
`;

const OptionContainer = styled(BlockContainer)`
    color: ${Colors.blue};
    margin-right: 20px;
`;

const Container = styled.div`
    margin: 30px;
`;

const StyledComment = styled.div`
    background: ${Colors.white};
    border-radius: 7px;
    border-top: 1px solid ${Colors.verylightgray};
    border-right: 1px solid ${Colors.verylightgray};
    border-left: 1px solid ${Colors.verylightgray};
    border-bottom: 3px solid ${Colors.verylightgray};
    margin: 10px
`;

const StyledTitle = styled(Title)`
    color: ${Colors.blue};
    &::first-letter {
        text-transform: uppercase;
    }
`;

const Content = styled.div`
    margin: 10px;
    letter-spacing: 1.6;
    color: ${Colors.darkgrey};
    &::first-letter {
        text-transform: uppercase;
    }
`;

const MiniatureImage = styled(ImageContainer)`
width: 20px;
border-radius: 50%;
margin: 10px;
border: 1px solid black;
`;

const Dot = styled.img`
    width: 4px;
    height: 4px;
    margin: 5px 10px;
`;

const StyledSmallIcon = styled.img`
    width: 15px;
    height: 20px;
    padding: 0 10px;
    filter: contrast(0.1);
`;

const CustomWrapper = styled(Wrapper)`
    place-content: flex-start;
    place-items: center;
`;

const PaginationButton = styled.button`
    color: ${Colors.blue};
    border: none;
    background: none;
    padding: 10px 10px 0 10px;
    font-size: 17px;
    font-weight: bolder;
    cursor: pointer;
`;
export const ResumeYourWork: FC = () => {
    const { usersList, photosList, currentUser, postsList, commentsList } = useSelector<IState, IUsersReducer & IPhotosReducer & IPostsReducer & ICommentsReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
        ...globalState.posts,
        ...globalState.comments
    })); 

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const dispatch = useDispatch();
    const [comments, setComments]=useState([])

    const [pageNumber, setPageNumber]= useState(1)
    const [commentNumber]= useState(15)
    
    const currentPageNumber = (pageNumber * commentNumber) - commentNumber  
    const paginatedComments = comments.splice(currentPageNumber, commentNumber)
    
    const handlePrev =()=>{
        if(pageNumber === 1) return
        setPageNumber(pageNumber - 1)
    }
    const handleNext =()=>{
        if(pageNumber === 34) return
        setPageNumber(pageNumber + 1)
    }
        
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data=>{
            setComments(data)
        })
    })   

    const Comment = paginatedComments.map((comment, index) =>
    //{comment.name.toLowerCase().icludes(inputText.toLowerCase()) && 
        <StyledComment>
                <StyledTitle>{comment.name}</StyledTitle>
                <Content>{comment.body}</Content>
                <CustomWrapper>
                    <MiniatureImage src={photosList?.[usersList?.[currentUser?.id]?.id]?.url} alt=""/>
                    <h3>{usersList?.[postsList?.[currentUser?.id]?.userId]?.name}</h3>
                    <Dot src="./media/icons/black-circle.png" alt=""/>
                    <StyledSmallIcon src="./media/icons/file-signature-solid.svg" alt=""/>
                    <h3>Contract</h3>
                    <Dot src="./media/icons/black-circle.png" alt=""/>
                    <h3>Updated 3 days ago by {usersList?.[postsList?.[currentUser?.id]?.userId]?.name}</h3>
                </CustomWrapper>
            
        </StyledComment>
       // } 
    )

    return (
        <Container>
            <StyledWrapper>
                <Title>Resume your work</Title>
                <input value={inputText} onChange={inputHandler} type="text" name="" id="" placeholder="Filter by title..."/>
                <OptionContainer>
                    <InnerWrapper onClick={toggleDropdown}>
                        <Icon src="./media/icons/wifi.svg"></Icon>
                        <h3>Followed &#x25BC; </h3>
                    </InnerWrapper>
                    {dropdownOpen &&
                        <div>
                            <ul>
                                <li>Wszystkie</li>
                                <li>Moje</li>
                            </ul>
                        </div>
                    }
                </OptionContainer>
            </StyledWrapper>
            
            <div>{Comment}</div>
            
            <Wrapper>
                <PaginationButton onClick={handlePrev}>PREVIOUS</PaginationButton>
                <Text>{pageNumber}</Text>
                <PaginationButton onClick={handleNext}>NEXT</PaginationButton>
            </Wrapper>
        </Container>
    )}
