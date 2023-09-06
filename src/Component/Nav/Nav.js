import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import './Nav.css'
import logo from '../../Assests/Logo.svg'

function Nav() {
    return (
        <div className="container">
            <nav>
                <div className="nav_left">
                    <img src={logo} alt="" />
                    <div className="nav_demo">
                        <h2> Demo Application</h2>
                        <a href="#">http://beaglehack.com/</a>
                    </div>
                </div>
                <div className="nav_right">
                    <button className='setting_test_btn'><FontAwesomeIcon icon={faCog}/>Setting</button>
                    <button className='nav_test_btn'>Test Now</button>
                </div>
            </nav>
            
        </div>
    )
}

export default Nav