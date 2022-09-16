import React, { Component } from 'react';
import {Header} from "./layout/Header";
import ReCAPTCHA from "react-google-recaptcha";
import ReactGA from 'react-ga';

const recaptchaRef = React.createRef();
function onChange(value) {
  if(value !== null){
  document.getElementById("submit").disabled = false;
  }else{
      document.getElementById("submit").disabled = true;
  }
}
export class Home extends Component {

    onFormSubmit = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        this.props.onFormSubmit(recaptchaValue);
        ReactGA.event({
            category: 'Button',
            action: 'Submit button clicked'
        });
    }
    pageViewsTracking = (props) =>{
        const pathname = props.match.path;
        let pageview;
        if(pathname === "*") pageview ="./not-found";
        else pageview = pathname;
        ReactGA.pageview(pageview);
    }


        
    render() {
        return (       
          <div className="site-main">   
            <Header/>
            
                <div className="row main-container">
                    <div className="col-lg-5">
                        <div >
                            <img className="sticky" src="img/khoza.jpg" /*src="https://via.placeholder.com/400x790/444444.jpg"*/ title="single-img-five" alt="single-img-five" />
                        </div>
                    </div>
            
                    <div id="home" className="col-lg-7">
                        <div className="mt-lg-5 pt-lg-3 mt-sm-5 mt-5">
                            <section  className="title container">
                                <div className="featured-content">
                                <div className="d-none d-lg-block mt-lg-5"></div>
                                <h1 className="featured-title"><b> Phillip Anton Khoza</b></h1>
                                <p className="featured-paragraph">I am a Junior Software Developer and a graduate from Tshwane University of Technology with a diploma in Information Technology. My openness and enthusiasm are a result of my commitment to finding opportunities where my technical, creative, and problem-solving skills can be applied to solving real business and social challenges, as well as to exploring emerging trends in the field of software engineering and to growing as an individual and professional.</p>
                                <div className="featured-buttons">
                                {/* <a type="button" class="btn btn-outline-warning btn-space" href="#">Have a Chat</a>
                                <a type="button" class="btn btn-outline-warning btn-space" href="#">Hire Me</a> */}
                                </div>
                                <div className="featured-social-icons">
                                    <ul className="social-media list-inline">
                                        <li className="list-inline-item"><a className="tooltip-top" data-tooltip="Facebook" href="https://www.facebook.com/phillipanthony.khoza" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="list-inline-item"><a className="tooltip-top" data-tooltip="Twitter" href="https://twitter.com/PhillipAKhoza1" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="list-inline-item"><a className="tooltip-top" data-tooltip="Github" href="https://github.com/phillipAKhoza" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                                        </li>
                                        <li className="list-inline-item"><a className="tooltip-top" data-tooltip="Linkedin" href="https://www.linkedin.com/in/phillip-anton-khoza/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                                
                            </section>
                            <div id="about" className="featured-slipter-title"></div>
                            <section  className="info container">
                                <div className="sub-title">
                                <h5>ABOUT ME</h5>
                                </div>
                                <h2 className="featured-title-h2">I Am A Passionate Software Developer</h2>
                                <p className="featured-paragraph">Solving problems and learning new things are enjoyable activities for me. I strive to achieve both personal and professional growth. With my studies and professional experience, I have acquired technical skills and learned how to communicate effectively with others. My passion for technology keeps me learning new things all the time. </p>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6">
                                       <ul className="abt-ul">
                                        <li><strong>Residence: </strong>Gauteng</li>
                                        <li><strong>Address: </strong>Pretoria, soshanguve</li>
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
                                <p className="featured-paragraph skill-sub"><strong> The following areas of knowledge are among my strengths</strong></p>
                                <div className="pt-30">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-computer"></i>
                                                <h5>Web App Development</h5>
                                                {/*<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-mobile-app"></i>
                                                <h5>Mobile App Development</h5>
                                                {/*<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-system"></i>
                                                <h5>Website Development</h5>
                                                {/*<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a> */}
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon  flaticon-server"></i>
                                                <h5>DevOps and Azure</h5>
                                                {/*<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                                                <a href="#" className="skill-btn">Read More
                                                    <i className="widget"></i>
                                                </a> */}
                                                
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
                                <h2 className="featured-title-h2">I Have over two years of Experience in Software Development</h2>
                                <p className="featured-paragraph">Despite the fact that I am only at the beginning of my professional career, I already possess a multitude of skills. For example, I have experience with HTML5, CSS3, React, React Native, JavaScript (ES6), and on the back-end development side, I have NodeJs, MongoDB, PHP, and RESTful APIs to name a few.</p>
                                <div className="experience-container">
                                    <div className="experience-inner">
                                        <ul className="company">
                                            <li><span>2021/05 - Present</span></li>
                                            <li><span>Junior Software Dev, Itthynk Smart Solutions, JHB</span><p>Building solutions ranging from Web Applications: HTML5,CSS3, JavaScript, MongoDB, Firebase, NodeJS, Express, RESTAPIs, Git, Netlify; Mobile Application: Flutter; Cloud Computing: Azure, Azure DevOps; SharePoint: SharePoint Deployment, SharePoint Development, SPFx, Power Platform Development: PowerApps, Power Automate, Power BI, CDS, Dynamics 365,</p></li>
                                        </ul>
                                    </div>
                                    <div className="experience-inner">
                                        <ul className="company">
                                            <li><span>2020/11 - 2021/04</span></li>
                                            <li><span>Software Dev Internship, Itthynk Smart Solutions, JHB</span><p>Software Developer; Building web application: HTML5,CSS3,JavaScript, JQuery, Git, React; cloud computing: Azure, DevOps</p></li>
                                        </ul> 
                                    </div>
                                    <div className="experience-inner">
                                        <ul className="company">
                                            <li><span>2020/06 - 2020/11</span></li>
                                            <li><span>Mobile App Dev Intern, Nisela Group Holdings, PTA</span><p>Android and IOS mobile Dev, React Nactive and Backend as a Service: Firebase Firestore</p></li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="featured-paragraph">In addition to the company's work, I also do freelance work which enables me to improve my abilities and passion.</p>
                            </section>
                            <div id="portfolio" className="featured-slipter-info"></div>
                            <section className="info container">
                            <div className="sub-title">
                                <h5>PORTFOLIO</h5>
                                </div>
                                <h2 className="featured-title-h2">Check out my work</h2>
                                <div className="pt-30">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <a href='https://worldwweather.netlify.app/' target="_blank" rel='noreferrer' className='portfolio-links'>
                                                <img src="./img/weatherapi.png" className="portfolio" alt="weatherAPI" />
                                                <h5 className='pt-2'> World Wide Weather</h5>
                                                <p>This Application uses Weather API from metaweather. The application shows five weather updates present and the next coming four days. Built using ReactJS, Bootstrap and CSS </p>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-mobile-app"></i>
                                                <h5>Mobile App Development</h5>
                                                
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="pt-30">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <a href='https://property-listing-apk.netlify.app/' target="_blank" rel='noreferrer' className='portfolio-links'>
                                                <img src="./img/property.png" className="portfolio" alt="weatherAPI" />
                                                <h5 className='pt-2'> Property listing app</h5>
                                                <p>Property listing app using React and Firebase. With the app you can view property listing which fall under two categories: Rent and Sale. You can also creat an account to list a property, edit it and delete it</p>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-mobile-app"></i>
                                                <h5>Mobile App Development</h5>
                                                
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="pt-30">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <a href='https://property-listing-apk.netlify.app/' target="_blank" rel='noreferrer' className='portfolio-links'>
                                                <img src="./img/eyeamg.png" className="portfolio" alt="weatherAPI" />
                                                <h5 className='pt-2'> eyeamg</h5>
                                                <p>eyeamg is an existing project by @netninja know as firegram it is created using React and Firebase[Storage] for just uploading images, the sole purpose of me re doing it was to updrade the project from using firebase 7 to firebase 9.</p>
                                                </a>
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6 col-lg-6">
                                            <div className="skill-item">
                                                <i className="flaticon flaticon-mobile-app"></i>
                                                <h5>Mobile App Development</h5>
                                                
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </section>
                            <div  id="certification" className="featured-slipter-info"></div>
                            <section  className="info container">
                            <div className="sub-title">
                                <h5>CERTIFICATIONS</h5>
                                </div>
                                <h2 className="featured-title-h2">The qualifications I possess</h2>
                                <p className="featured-paragraph">As an aspiring full-stack developer, I keep myself updated with online courses and certifications and enjoy building personal projects tailored to emerging technologies. Adaptability is one of my strong points, as is my ability to pick up new skills quickly.</p>
                                <div className="row certification-container">
                                    <div className="cert col-sm-6 col-lg-6">
                                        <div className="certificate-inner">
                                            <ul className="certification">
                                                <li className="cert-img">
                                                    <img src="./img/badge.png" className="cert-img" alt="qualification 1" />
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
                                                    <img src="./img/badge.png" className="cert-img" alt="qualification 2" />
                                                </li>
                                                <li className="cert-text"> 
                                                    <p className="institution-text">National Diploma IT, TUT</p>
                                                    <p className="institution-year">01-2021</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="certificate-inner">
                                            <ul className="certification">
                                                <li className="cert-img">
                                                    <img src="./img/badge.png" className="cert-img" alt="qualification 3" />
                                                </li>
                                                <li className="cert-text">
                                                    <p className="institution-text">Microsoft 480 Exam </p>
                                                    <p className="institution-year">12-2020</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 text-center">
                                        <div  className="bg-img-1 cert-img-2">
                                            {/* <img src="img/cert.jpg" alt="certificate2" className="cert-img-2"/> */}
                                            <div className="center">
                                                <div className="ttm-play-icon-btn align-items-center">
                                                    <div className="ttm-play-icon-animation"> 
                                                    <div id="playbutton">
                                                        <div className="ttm-icon pk-bgcolor-skincolor ttm-icon_element-size-sm rounded-circle">
                                                        <i className="fa fa-play" />
                                                        </div>
                                                    </div>
                                                    <div id="videobox">
                                                        <i id="close-btn" className="fa fa-times"></i>
                                                        <div id="video-wrapper">
                                                        <iframe width="500" height="500" src="https://www.youtube.com/embed/2kMi6MfmGM8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>                              
                                                        </div>
                                                    </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div id="contact" className="featured-slipter-info"></div>
                            <section  className="info container">
                            <div className="sub-title">
                                <h5>CONTACT</h5>
                                </div>
                                <h2 className="featured-title-h2">Do You Have Any Projects? Feel free to send me a message</h2>
                                <p className="featured-paragraph">Get in touch if you are interested in having me involved in your project, think I would make a fantastic addition to your team, or just want to say hi</p>
                                <form  className="row ttm-quote-form clearfix" method="POST" action="https://formsubmit.co/phillipantonk@gmail.com" onSubmit={this.onSubmit}>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input name="name" type="text" className="form-control bg-gray" placeholder="Full Name*" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input name="phone" type="text" placeholder="Phone Number*" required="required" className="form-control bg-gray" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input name="address" type="text" placeholder="Email Address*" required="required" className="form-control bg-gray" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input name="subject" type="text" placeholder="Subject" required="required" className="form-control bg-gray" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="Massage" rows={5} placeholder="Write A Massage..." required="required" className="form-control bg-gray" defaultValue={""} />
                                            </div>
                                        </div>
                                        <input type="hidden" name="_next" value="https://www.phillip-dev.com/"/>
                                        <input type="hidden" name="_captcha" value="false"/>
                                        <div className="recapt">
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey="6LfW7FMcAAAAAH_ZFtgqNDKd4eBdLD2JeDUoxo9Y"
                                            onChange={onChange}
                                        />
                                        </div>
                                        
                                        <div className="col-md-12">
                                            <div className="text-left">
                                                <button type="submit" id="submit" className="btn submit-btn" disabled >
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                        
                                </form>

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
