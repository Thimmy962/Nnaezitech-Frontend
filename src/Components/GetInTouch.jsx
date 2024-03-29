import React from 'react'
import { Link } from 'react-router-dom'
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import { IoMdMail } from "react-icons/io";
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
                                  <li><a href="mailto:nwasukan@yahoo.com"><IoMdMail /></a></li>
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
                              <p className='color-white'>Address:</p>
                              <p className='color-white'><span><HomeAddressIcon /></span> 7, Airport Close Mafoluku, Mafoluku, Oshodi, Lagos State</p>
                          </div>

                          <div className="phone margin-bottom">
                              <p className='color-white'>Phone:</p>
                              <p>
                                  <a href="tel:08033287394" className='color-white'>
                                      <span className='svg color-white'><FaPhoneAlt /></span>0803-328-7394
                                  </a>
                              </p>
                              <p>
                                  <a href="tel:08038034835" className='color-white'>
                                    <span className="svg color-white"><FaPhoneAlt /></span>0803-803-4835
                                  </a>
                              </p>
                          </div>

                          <div className="mail">
                            <p className='color-white'>Email:</p>
                            <p className='color-white'><span className='svg'><MailIcon /></span>nwasukan@yahoo.com</p>
                          </div>
                    </div>
                  </div>
            </div>

            <div className='footer-end'>
                      <div className="footer-end-first">
                        NnaeziTech &copy; {date.getFullYear()} - Designed by <i style={{textDecoration: "overline"}}>Thimmy</i>
                      </div>

                      <div className="footer-end-second">
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <Link to={'/contact'}><p style={{color: 'white'}}>Contact</p></Link>
                      </div>
                  </div>
    </div>
  )
}

export default GetInTouch