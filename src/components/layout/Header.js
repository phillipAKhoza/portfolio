import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (   
           <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="https://www.facebook.com/phillipanthony.khoza"><img src="img/logo.png" alt="logo" className="featured-logo"/></a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link pk-light active" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pk-light" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pk-light" href="#portfolio">Portfolio</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link pk-light" href="#certification">Certification</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pk-light" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div class="form-inline my-2 my-lg-0">
                         <a className="btn download btn-outline-warning my-2 my-sm-0" type="submit" href="https://www.facebook.com/phillipanthony.khoza">Download CV <i className="fa fa-download featured-icon"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            
            )
    }
}