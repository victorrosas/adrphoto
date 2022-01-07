import React from 'react';

import { 
    Container, 
    NavbarWrap,
    NavbarWrapLeft, 
    NavbarWrapLogo, 
    NavbarWrapRight, 
    Logo, 
    NavLink } from './styles';

function NavBar() {
  return (
    <Container>
        <NavbarWrap>
            <NavbarWrapLeft>
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/">SOBRE</NavLink>
                    <NavLink to="/">TRABALHOS</NavLink>
            </NavbarWrapLeft>

            <NavbarWrapLogo>
                <Logo />
            </NavbarWrapLogo>
            <NavbarWrapRight>
                    <NavLink to="/">DEPOIMENTOS</NavLink>
                    <NavLink to="/">ORÇAMENTO</NavLink>
            </NavbarWrapRight>
        </NavbarWrap>
    </Container>
  );
}

export default NavBar;