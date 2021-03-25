import React, {FC} from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';

import { HomeDropdown } from '../Headers/HomeDropdown';

const Logo = styled.img`
    width: 20%;
`
Logo.defaultProps = {
    src: './media/icons/logo.png',
};

export const TopMenu: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    
    const menuHandler = () => {
        toggleDropdown();
    };
    
    return (
        <div>
            <Logo />
            <div ref={wrapperRef}>
               <div onClick={menuHandler}>
               <img src="./media/icons/house.png" alt=""/>
               <h3>Home</h3>
               <p>&#x25BC;</p>
               {dropdownOpen &&
                    <HomeDropdown />
                }
               </div>                             
            </div>          
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

