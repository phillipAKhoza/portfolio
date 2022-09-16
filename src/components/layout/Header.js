import React, { Component } from 'react';
import ReactGA from 'react-ga';


export class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.navClick = this.navClick.bind(this);

    }
    
    handleClick(){
        // console.log('You clicked submit.');
        ReactGA.event({
            category: 'Button',
            action: 'CV button clicked'
        });
    }
    navClick(){
        // console.log('You clicked submit.');
        ReactGA.event({
            category: 'Button',
            action: 'navigation button clicked'
        });
    }

    render() {
        return (   
           <nav id="navbar" className="navbar navbar-light navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href={process.env.PUBLIC_URL + '/'}><img src="img/logo.png" alt="logo" className="featured-logo"/></a>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link pk-light" onClick={this.navClick} href="#home" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pk-light" onClick={this.navClick} href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pk-light" onClick={this.navClick} href="#portfolio">Portfolio</a>
                            </li>
                             <li className="nav-item">
                                <a className="nav-link pk-light" onClick={this.navClick} href="#certification">Certification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pk-light" onClick={this.navClick} href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                         <a className="btn download btn-outline-warning my-2 my-sm-0" type="submit" href="https://drive.google.com/file/d/1w9gF5NgJuVWiyZfFtfC318-kcT0kiaS6/view?usp=sharing" onClick={this.handleClick}>Download CV <i className="fa fa-download featured-icon"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
            
            )
    }
}