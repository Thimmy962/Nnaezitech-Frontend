import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {MailIcon, FaPhoneAlt, HomeAddressIcon} from './svgs.jsx'


const GetInTouch = () => {
  const date = new Date()


  return (
    <div id='footer'>
        <div id="get-in-touch">
                  <div className='nnaezi'>
                      <div className='footer footer-header'>
                          Nnaezi
                      </div>

                      <div>
                          Nnaezi Repair, we're committed to earning your trust by providing the highest quality car repair services at a fair price.
                      </div>

                      <div id="nnaezi-socials">
                                <ul className='social-lists'>
                                  <li><a href="https://fb.me/nnaezitech"><BiLogoFacebook /></a></li>
                                  <li><a href="https://twitter.com/nnaezitech"><AiOutlineTwitter /></a></li>
                                  <li><a href="https://instagram.com/nnaezitech"><BiLogoInstagram /></a></li>
                                  <li><a href="http://linkedin.com/in/nnaezitech"><BiLogoLinkedin /></a></li>
                              </ul>
                      </div>
                  </div>

                  <div className='links'>
                    <div className='footer-header'>
                        <div className='inside'>Useful Links</div>
                    </div>

                    <ul className='links-list'>
                        <li><Link to='/'>&raquo; Home</Link></li>
                        <li><Link to='/listing'>&raquo; List</Link></li>
                        <li><Link to='/about'>&raquo; About</Link></li>
                        <li><Link to='/contact'>&raquo; Contact</Link></li>
                    </ul>
                  </div>

                  <div className='address'>
                    <div className='footer-header contacts'>
                      <div className='inside'>Contact:</div>
                    </div>
                    
                    <div>
                          <div className="address margin-bottom">
                              <p>Address:</p>
                              <p><span><HomeAddressIcon /></span> 11 West Town, PBo 12345, United States</p>
                          </div>

                          <div className="phone margin-bottom">
                              <p>Phone:</p>
                              <p><span className='svg'><FaPhoneAlt color='#ff0000'/></span>08039918731</p>
                          </div>

                          <div className="mail">
                            <p>Email:</p>
                            <p><span className='svg'><MailIcon /></span>oluwatimileyin962@gmail.com</p>
                          </div>
                    </div>
                  </div>
            </div>

            <div className='footer-end'>
                      <div className="footer-end-first">
                        NnaeziTech &copy; {date.getFullYear()} - Designed by Thimmy
                      </div>

                      <div className="footer-end-second">
                        <p>Terms & Conditions</p>
                        <p>Privary Policy</p>
                        <p>Contact</p>
                      </div>
                  </div>
    </div>
  )
}

export default GetInTouch