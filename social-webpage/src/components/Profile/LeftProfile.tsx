import React, { FC } from 'react';
//import styled from 'styled-components';

export const LeftProfile: FC = () => {
    return (
        <div>
            <div>
                <div>
                    <img src="../" alt=""/>
                    <h2>Patrycja Bobek</h2>
                    <h3>Job title - </h3>
                    <hr/>
                    <div>
                        <div>
                            <img src=".media/icons/network.png" alt=""/>
                            <h2>Your network</h2>                           
                                <img src=".media/icons/user-plus.png" alt=""/>                         
                        </div>
                        <div>
                            <img src=".media/icons/publmediacations.png" alt=""/>
                            <h2>Your publications</h2>
                                <img src=".media/icons/plus.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <img src=".media/icons/publications.svg"  alt=""/>
                        <h2>Publications</h2>
                    </div>
                    <div>
                        <img src=".media/icons/ecosystem.svg" alt=""/>
                        <h2>Ecosystem</h2>
                    </div>
                    <div>
                        <img src=".media/icons/entities.svg" alt=""/>
                        <h2>Entities</h2>
                    </div>
                </div>
                

            </div>
        </div>
    )
}