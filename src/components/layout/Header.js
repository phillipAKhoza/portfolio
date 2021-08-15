import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (   
            <nav id="menu"  class="navbar navbar-light menu" role="navigation"  style="background-color: #e3f2fd;">
                <ul>
                    <li ><a >Home</a>

                    </li>
                    <li ><a href="#">About</a>
                    </li> 
                    
                    <li ><a  href="#">Portfolio</a>
                    </li>
                    <li><a href="#">Projects</a>
                    </li>
                    <li className="menu-hasdropdown"><a>Our Group</a>
                        <ul className="menu-dropdown">
                            <li><a href="#">ITTHYNK GAMING</a></li>
                            <li><a href="#">ITTHYNK FOUNDATION</a></li>
                            <li><a href="#">ITTHYNK PRESS</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
    
            )
    }
}