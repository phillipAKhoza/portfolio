import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (   
           <nav id="navbar" class="navbar navbar-expand-sm fixed-top">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img src="img/logo.png" className="featured-logo"/></a>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link pk-light" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pk-light" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pk-light" href="#">Portfolio</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link pk-light" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pk-light" href="#">Contact</a>
                            </li>
                        </ul>
                        <div class="form-inline my-2 my-lg-0">
                         <a className="btn download btn-outline-warning my-2 my-sm-0" type="submit">Download CV <i className="fa fa-download featured-icon"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            
            )
    }
}