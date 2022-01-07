import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from '../../assets/logo.png';

export const Container = styled.div`
    width: 100%;
    height: 134px;
    z-index: 20;  
    background-color: rgba(242,242,242,1);
}

`;

export const NavbarWrap = styled.div`
    max-width: 1323px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NavbarWrapLeft = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
    text-align: center;
`; 
export const NavbarWrapLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`; 
export const NavbarWrapRight = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35%;
    text-align: center;
`;

export const Logo = styled.div`
    width: 200px;
    height: 104px;
    background: url(${Img}) 0 45% no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
`;

export const NavLink = styled(Link)`
    color: rgb(10, 10, 10); 
    font-family: Montserrat, sans-serif;
	font-size: 15px;
    font-weight: 400;
	text-decoration: none;
    &:hover {
        color: rgb(139, 139, 139);
    }
    transition: 0.1s;
`;