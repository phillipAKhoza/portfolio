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
                                <h2 className="featured-title-h2">I Am A Passionate Front-end web, Mobile, and SPFx developer</h2>
                                <p className="featured-paragraph">Solving problems and learning new things are enjoyable activities for me. I strive to achieve both personal and professional growth. With my studies and professional experience, I have acquired technical skills and learned how to communicate effectively with others. My passion for technology keeps me learning new things all the time. </p>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                       <ul className="abt-ul">
                                        <li><strong>Residence: </strong>Pretoria</li>
                                        <li><strong>Address: </strong>961 Soshanguve, Block H</li>
                                       </ul>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <ul className="abt-ul">
                                        <li><strong>Phone: </strong>+27 72 078 1237</li>
                                        <li><strong>Email: </strong>phillipantonk@gmail.com</li>
                                       </ul>
                                    </div>
                                </div>
                            </section>

                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                                <div className="sub-title">
                                    <h5>WHAT I DO</h5>
                                </div>
                                 <h2 className="featured-title-h2">My Skills</h2>
                                <p className="featured-paragraph">As a result of my learning and work experiences, I have acquired a variety of skills, from soft skills to technical skills. When I work and communicate with other people, I always strive to develop skills that can help me communicate and work effectively.By bringing passion and dedication to my work, I strive to become better at my craft and to produce quality work.</p>
                                <div className="pt-30">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-computer"></i>
                                                <h5>Web App Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-mobile-app"></i>
                                                <h5>Mobile App Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-system"></i>
                                                <h5>Website Development</h5>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon  flaticon-server"></i>
                                                <h5>DevOps and Azure</h5>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>MY EXPERIENCE</h5>
                                </div>
                                <h2 className="featured-title-h2">I Have over a year of Experience in Software Development</h2>
                                <p className="featured-paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <div className="experience-container">
                                    <div className="experience-inner">
                                        <ul className="company">
                                            <li><span>2021/05 - Present</span></li>
                                            <li><span>Software Dev Intern, Itthynk Smart Solutions, JHB</span></li>
                                            <li><p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p></li>
                                        </ul>
                                    </div>
                                    <div className="experience-inner">
                                        <ul className="company">
                                            <li><span>2020/11 - 2021/04</span></li>
                                            <li><span>Software Dev Leanership, Itthynk Smart Solutions, JHB</span></li>
                                            <li><p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p></li>
                                        </ul>
                                    </div>
                                    <div className="experience-inner">
                                        <ul className="company">
                                            <li><span>2020/06 - 2020/11</span></li>
                                            <li><span>Mobile App Dev Intern, Nisela Group Holdings, PTA</span></li>
                                            <li><p>Lorem ipsum dolor sit amet, consete tur sadipscing elitr, sed diam nonum.</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="featured-paragraph">In addition to the company's work, I also do freelance work which enables me to improve my abilities and passion.</p>
                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>PORTFOLIO</h5>
                                </div>
                                <h2 className="featured-title-h2">Check out my work</h2>

                            </section>
                            <div className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>CERTIFICATIONS</h5>
                                </div>
                                <h2 className="featured-title-h2">The qualifications I possess</h2>
                                <p className="featured-paragraph">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                <div className="row certification-container">
                                    <div className="cert col-sm-6 col-lg-6">
                                        <div className="certificate-inner">
                                            <ul className="certification">
                                                <li className="cert-img">
                                                    <img src="https://via.placeholder.com/50x50/444444.jpg" alt="qualification" />
                                                </li>
                                                <li className="cert-text">
                                                    <p className="institution-text">Azure Administrator Associate</p>
                                                    <p className="institution-year">03-2021</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="certificate-inner">
                                            <ul className="certification">
                                                <li className="cert-img">
                                                    <img src="https://via.placeholder.com/50x50/444444.jpg" alt="qualification" />
                                                </li>
                                                <li className="cert-text">
                                                    <p className="institution-text">National Diploma Information Technology</p>
                                                    <p className="institution-year">01-2021</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="certificate-inner">
                                            <ul className="certification">
                                                <li className="cert-img">
                                                    <img src="https://via.placeholder.com/50x50/444444.jpg" alt="qualification" />
                                                </li>
                                                <li className="cert-text">
                                                    <p className="institution-text">Microsoft 480 Exam </p>
                                                    <p className="institution-year">12-2020</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6">
                                        <div >
                                            <img /*src="img/khoza.jpg"*/ src="https://via.placeholder.com/300x300/444444.jpg" title="single-img-five" alt="single-img-five" />
                                        </div>
                                    </div>
                                </div>
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
