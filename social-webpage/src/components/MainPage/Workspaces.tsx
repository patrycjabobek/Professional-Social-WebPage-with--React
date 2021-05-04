import React, { FC } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import Icon from '../Common/Icon';
import Dot from '../Common/Dot';
import { Wrapper, InnerWrapper, Title, BlockContainer } from '../../styledHelpers/Components';

const SliderContainer = styled(Wrapper)`
    width: 100%;
    display: block;
    margin-right: 30px;
`;

const CustomSlider = styled(Slider)`
display: flex;
align-items: center;
overflow: hidden;
width: 100%;
    .slick-list {
        width: 90%;
    }

    .slick-track {
        display: flex;
        > div {
            width: 250px;
        }
    }
`;

const SliderItem = styled(InnerWrapper)`
width: 200px;
border-radius: 5px;
`;

const BigIconContainer = styled(Icon)`

`;

export const Workspaces: FC = () => {
    const settings = {
    dots: false,
    infinitive: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
    }
return (
    <SliderContainer>
        <Title>Workspaces</Title>
        <CustomSlider {...settings}>
            <SliderItem>
                <div>
                <img src="" alt=""/>
                </div>
                <BigIconContainer></BigIconContainer>
                <BlockContainer>
                    <h2>Client contract</h2>
                    <Icon></Icon>
                    <h3>ds</h3>
                    <Dot />
                    <Icon></Icon>
                    <h3>s</h3>
                </BlockContainer>
                <h4>Last updated 2 days ago</h4>
            </SliderItem>
            <SliderItem>2</SliderItem>
            <SliderItem>3</SliderItem>
            <SliderItem>4</SliderItem>
            <SliderItem>5</SliderItem>
            <SliderItem>6</SliderItem>
            <SliderItem>7</SliderItem>
            <SliderItem>8</SliderItem>
            <SliderItem>9</SliderItem>
            <SliderItem>10</SliderItem>
        </CustomSlider>
    </SliderContainer>
)}