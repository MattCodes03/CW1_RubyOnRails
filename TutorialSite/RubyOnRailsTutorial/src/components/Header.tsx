import styled from 'styled-components';
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Container from 'react-bootstrap/Container';

// Styled components
const StyledNavbar = styled(Navbar)`
    width: 100%;
    background-color: #F81B01; // Optional: set a background color
    color: #FFFFFF;
    text-align: center;
`;

const StyledNavLink = styled(Nav.Link)`
    font-size: 20px;
    margin: 0 20px; // Horizontal margin for spacing
    color: #FFFFFF;
`;

const StyledBrand = styled(Navbar.Brand)`
    font-size: 30px; // Customize brand font size
    font-weight: bold; // Optional: make it bold
    color: #FFFFFF;
      margin: 10px 10px; 
`;

const Header = () => {
    return (
        <StyledNavbar expand="lg" sticky="top">
            <Container fluid>
                <StyledBrand href="/">Ruby on Rails</StyledBrand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <StyledNavLink>Presentation</StyledNavLink>
                        </LinkContainer>
                        <LinkContainer to="/tutorial">
                            <StyledNavLink>Tutorial</StyledNavLink>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    );
};

export default Header;
