import React, { Component } from 'react'
import styles from './style'
import { Link } from 'react-router'

export default (props) => {
    const type = (props.type) ? props.type : 'large'
    let nav = null

    if (type == 'large'){
        nav = (
            <nav className="nav-centered">
                <div className="text-center">
                    <a href="/">
                        <img className="logo logo-light" alt="Foundry" src="/img/logo-light.png" />
                        <img className="logo logo-dark" alt="Foundry" src="/img/logo-dark.png" />
                    </a>
                </div>
                <div className="nav-bar text-center">
                    <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="module-group text-left">
                        <div className="module left">
                            <ul className="menu">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li className="has-dropdown">
                                    <a href="#">Courses</a>
                                    <ul className="mega-menu">
                                        <li>
                                            <ul>
                                                <li>
                                                    <a href="/online">Online</a>
                                                </li>
                                                <li>
                                                    <a href="/courses">Live</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="modal-container">
                                    <a className="btn-modal" href="#">
                                        Login
                                    </a>
                                    <div className="foundry_modal text-center">
                                        <h3 className="uppercase">Login</h3>
                                        <input type="text" name="email" className="mb12 signup-email-field" placeholder="Email" />
                                        <input type="text" name="email" className="mb12 signup-email-field" placeholder="Password" />
                                        <button type="submit" className="btn-white mb0">Submit</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </nav>
        )    
    }
    else {
        nav = (
            <nav>
                <div className="nav-bar bg-dark">
                    <div className="module left">
                        <a href="/">
                            <h3 style={localStyle.titleWhite}>Velocity 360</h3>
                        </a>
                    </div>
                    <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="module-group right">
                        <div className="module left">
                            <ul className="menu">
                                <li><a style={{color:'#fff'}} href="/">Home</a></li>
                                <li className="has-dropdown">
                                    <a style={{color:'#fff'}} href="#">Courses</a>
                                    <ul>
                                        <li>
                                            <a href="/online">Online</a>
                                        </li>
                                        <li>
                                            <a href="/courses">Live</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="modal-container">
                                    <a style={{color:'#fff'}} className="btn-modal" href="#">
                                        Login
                                    </a>
                                    <div className="foundry_modal text-center">
                                        <h3 className="uppercase">Login</h3>
                                        <input type="text" name="email" className="mb12 signup-email-field" placeholder="Email" />
                                        <input type="text" name="email" className="mb12 signup-email-field" placeholder="Password" />
                                        <button type="submit" className="btn-white mb0">Submit</button>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    return (
            <div className="nav-container">
                {nav}
            </div>

    )

}

const localStyle = {
    title: {
        marginTop: 6,
        color:'#333',
        fontFamily: 'Pathway Gothic One',
        fontWeight: 100
    },
    titleWhite: {
        marginTop: 6,
        color:'#fff',
        fontFamily: 'Pathway Gothic One',
        fontWeight: 100
    }
}