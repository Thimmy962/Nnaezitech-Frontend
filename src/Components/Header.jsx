import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa6';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Header = () => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);



  return (
    <>
        <div id='header-header'>
          <div id='contacts'>
              <div className='header-contact'>
                <span>
                  <CiMail />
                </span>
                <p>info@mail.com</p>
              </div>

              <div className='header-contact'>
                <span>
                  <FaPhone />
                </span>
                <p>info@mail.com</p>
              </div>
          </div>

          <div className="socials">
                    <ul className='social-list'>
                      <li><a href="https://fb.me/nnaezitech"><BiLogoFacebook /></a></li>
                      <li><a href="https://twitter.com/nnaezitech"><AiOutlineTwitter /></a></li>
                      <li><a href="https://instagram.com/nnaezitech"><BiLogoInstagram /></a></li>
                      <li><a href="http://linkedin.com/in/nnaezitech"><BiLogoLinkedin /></a></li>
                  </ul>
            </div>
      </div>

      <div id='header' className='fixed'>
        <div id='logo'>
          <h3>Nnaezitech</h3>
        </div>

        <div id="wide-screen">
            <ul>
                <li className='header-list'><Link to={"/"}>Home</Link></li>
                <li className='header-list'><Link to={"listing"}>Listing</Link></li>
                <li>
                    <div className="dropdown">
                        <div className="dropdown-header dropdown-list">
                            Services
                        </div>

                        <ul className='dropdown-content'>
                            <li className='dropdown-header-list'><Link to={""}>Painting</Link></li>
                            <li className='dropdown-header-list'><Link to={""}>Repair</Link></li>
                            <li className='dropdown-header-list'><Link to={""}>Body Work</Link></li>
                            <li className='dropdown-header-list'><Link to={""}>Servicing</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='header-list'><Link to={"about"}>About</Link></li>
                <li className='header-list'><Link to={"contact"}>Contact</Link></li>
            </ul>
        </div>

        <div className="phone">
            {['Menu'].map(
            (variant) => (
                <DropdownButton
                    as={ButtonGroup}
                    key={variant}
                    id={`dropdown-variants-${variant}`}
                    variant={variant.toLowerCase()}
                    title={variant}
                >
                    <Dropdown.Item  href='#header'>Home</Dropdown.Item>
                    <Dropdown.Item>Listing</Dropdown.Item>
                    <Dropdown.Item>Painting</Dropdown.Item>
                    <Dropdown.Item>Repairs</Dropdown.Item>
                    <Dropdown.Item>Body Work</Dropdown.Item>
                    <Dropdown.Item>Servicing</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
                </DropdownButton>
            ),
      )}
        </div>
      </div>
    </>
  );
};

export default Header;
