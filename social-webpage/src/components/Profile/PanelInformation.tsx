import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Line from '../Common/Line';
import Icon from '../Common/Icon';
import {Wrapper, BigAvatar, BlockContainer, SubTitle, MainTitle, StyledHeader, StyledFile} from '../../styledHelpers/Components';

interface IProps {
    isEditable?: boolean
}
export const PanelInformation: FC<IProps> = (props) => {
    const [info, setInfo] = useState({
        fee: '610$/hour (Negociated)',
        terms: 'Monthly 10k$ retainer = see with Jeanny Smith',
        file: 'Attachment_lorem-ipsum23232.jpg',
        services: 'Corporate M&A and international acquisitions',
        // intCorr: String
    })
    return (
        <BlockContainer>
            <MainTitle>Panel Information</MainTitle>
            <div>
                <SubTitle>Hourly fee</SubTitle>
                {!props.isEditable
                    ? (<StyledHeader>{info?.fee}</StyledHeader>)
                    : <input type="text" value={info?.fee} onChange={ev => setInfo({...info, fee: ev.target.value})}/>
                }
            </div>
            <div>
                <SubTitle>Terms & conditions</SubTitle>
                {!props.isEditable
                    ?   (
                            <div>
                                <StyledHeader>{info?.terms}</StyledHeader>
                                <StyledFile>{info?.file}</StyledFile>
                            </div>
                        )
                    :   (
                            <div>
                                <input type="text" value={info?.terms} onChange={ev => setInfo({...info, terms: ev.target.value})}/>
                                <input type="file" onChange={e => setInfo({...info, file:  e.target.files[0].name as string})}/>
                            </div>
                        )
                }
            </div>
            <div>
                <MainTitle>Services & projects</MainTitle>
                {!props.isEditable
                    ? <StyledHeader>{info?.services}</StyledHeader>
                    : <input type="text" value={info?.services} onChange={ev => setInfo({...info, services: ev.target.value})}/>
                }
            </div>
            <div>
                <MainTitle>Internal correspondants</MainTitle>
                {/* {props.isEditable
                    ? (<StyledHeader>610$/hour (Negociated)</StyledHeader>)
                    : <input type="text" onChange={ev => setInfo({...info, intCorr: ev.target.value})}/>
                } */}
            </div>
            <Line/>
        </BlockContainer>
    )
}