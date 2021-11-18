import './Styles/Navi.css';
import './Styles/Color.css';
import './Styles/Font.css';

import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    Navbar,
    Offcanvas
} from 'react-bootstrap';

function SideBar() {
    return(
    <Navbar className='navTitleContainer TitleBar fixed-top' expand={false}>
        <Navbar.Toggle className="NavButton" aria-controls="offcanvasNavbar" />
        <Container className='naviContainer'>
            <Row>
                <Col xs={12} className='titleName'>
                <Navbar.Brand className="navTitle Title-Font" href='/'>
                        <b><h1>Seohee's React Project</h1></b>
                </Navbar.Brand>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        <Navbar.Offcanvas
            id="offcanvaNavbar"
            aria-labelledby="offcanvasNavBarLabel"
            placement='start'
        >
            <Offcanvas.Header className="NavTitle Content-Font" closeButton>
                <Offcanvas.Title className="navHeaderText" id="offcanvasNavbarLabel">
                    My Menus
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Container className="Explain-Font NaviTitle introduce">
                <div>
                    <h3>한서희<p>의 포트폴리오 페이지 입니다!</p></h3>
                </div>
            </Container>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className="navItemBox" href='/Home'>Home</Nav.Link>
                    <div className="line"/>
                    <Nav.Link className="navItemBox" href='/Parking'>Parking</Nav.Link>
                    <Nav.Link className="navItemBox" href='/Weather'>Weather</Nav.Link>
                    <Nav.Link className="navItemBox" href='/Cvd'>Covid</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Navbar>   
    )
}

export default SideBar;