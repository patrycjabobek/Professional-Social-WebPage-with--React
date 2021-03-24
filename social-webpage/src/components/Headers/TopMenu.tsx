import React, {FC} from 'react';
//import styled from 'styled-components';

import { HomeDropdown } from '../Headers/HomeDropdown';

export const TopMenu: FC = () => {
    return (
        <div>
            <img src="./media/icons/logo.png" alt=""/>
            <HomeDropdown/>
            <div>
                <input type="text" />
                <img src="./media/icons/search.png" alt="" />
            </div>
            <div>
                <img src="./media/icons/comments.png"  alt=""/>
                <img src="./media/icons/house.png"  alt=""/>
                <img src="./media/icons/bell.png"  alt=""/>
            </div>
        </div>
    )
}

