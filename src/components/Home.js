import React, { Component } from 'react';
import {Header} from "./layout/Header";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const images = [
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg',
  'https://via.placeholder.com/600X750/444444.jpg'
];

export class Home extends Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (       
          <div className="site-main">   
            <Header/>
            
                <div className="row main-container">
                    <div className="col-lg-5 ">
                        <div >
                            <img className="img-fluid sticky" src="img/khoza.jpg" /*src="https://via.placeholder.com/400x790/444444.jpg"*/ title="single-img-five" alt="single-img-five" />
                        </div>
                    </div>
            
                    <div className="col-lg-7">
                        <div className="mt-lg-5 pt-lg-3 mt-sm-5 mt-5">
                            <section className="title container">
                                <div className="featured-content">
                                <div className="d-none d-lg-block mt-lg-5"></div>
                                <h1 className="featured-title"><b> Phillip Anton Khoza</b></h1>
                                <p className="featured-paragraph">Hello I am a Junior Developer from South Africa based in Pretoria. I have 1.6 years of industry experience building web applications, mobile applications and websites. I have worked on different client projects using React, JavaScript, TypeScript, Bootstrap, Express, NodeJS, MongoDB, SPFx, and JAVA.</p>
                                <div className="featured-buttons">
                                <a type="button" class="btn btn-outline-warning btn-space">Have a Chat</a>
                                <a type="button" class="btn btn-outline-warning btn-space">Hire Me</a>
                                </div>
                                <div className="featured-social-icons">
                                    <ul className="social-media list-inline">
                                        <li class="list-inline-item"><a className="tooltip-bottom" data-tooltip="Facebook"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li class="list-inline-item"><a className="tooltip-bottom" data-tooltip="Twitter"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li class="list-inline-item"><a className="tooltip-bottom" data-tooltip="Flickr"><i className="fab fa-instagram" /></a>
                                        </li>
                                        <li class="list-inline-item"><a className="tooltip-bottom" data-tooltip=" aedin"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                
                            </section>
                            <div className="featured-slipter-title"></div>
                            <section className="info container">
                                <div className="sub-title">
                                <h5>ABOUT ME</h5>
                                </div>
                                <h2 className="featured-title-h2">I Am A Passionate Front-end web Developer, Mobile Developer, SharePoint Framework Extention developer</h2>
                                <p className="featured-paragraph">Hello I am a Junior Developer from South Africa based in Pretoria. I have 1.6 years of industry experience building web applications, mobile applications and websites. I have worked on different client projects using React, JavaScript, TypeScript, Bootstrap, Express, NodeJS, MongoDB, SPFx, and JAVA.</p>
                            </section>

                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>WHAT I DO</h5>
                                </div>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>MY EXPERIENCE</h5>
                                </div>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>PORTFOLIO</h5>
                                </div>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>CERTIFICATIONS</h5>
                                </div>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>BLOG</h5>
                                </div>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>TESTIMONIALS</h5>
                                </div>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>CONTACT</h5>
                                </div>
                            What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </section>
                            <div className="featured-slipter-info"></div>
                           
                        </div>               
                    </div>
                </div>

          </div>
        )
    }
}


export default Home;
