import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa6';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      <div id='header-first-div'>
          <div id='contacts'>
              <div className='header-contact'>
                <span>
                  <CiMail color='white' size='20'/>
                </span>
                <p>nwasukan@yahoo.com</p>
              </div>

              <div className='header-contact'>
                <span>
                  <FaPhone />
                </span>
                <p>08033287394</p>
              </div>
          </div>

          <div id="socials">
                    <ul className='social-list'>
                      <li><a href="https://fb.me/nnaezitech"><BiLogoFacebook /></a></li>
                      <li><a href="https://twitter.com/nnaezitech"><AiOutlineTwitter /></a></li>
                      <li><a href="https://instagram.com/nnaezitech"><BiLogoInstagram /></a></li>
                      <li><a href="http://linkedin.com/in/nnaezitech"><BiLogoLinkedin /></a></li>
                  </ul>
          </div>
      </div>

        <Navbar bg='light' expand="lg"className='navbar'>
              <Navbar.Brand href="/" className="mr-5">Nnaezitech</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ">
                  <Nav.Link href='/'>Home</Nav.Link>
                  <Nav.Link href="/listing">Listing</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>
    </>
  );
};

export default Header;
