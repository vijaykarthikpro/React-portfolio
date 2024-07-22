import "./about.scss";
import myProfile from '../../assets/images/my-profile.jpg'
import {BsAward} from 'react-icons/bs';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
        <div className="container about-container">
            <div className="content flex-centered">
                <span>ABOUT ME</span>
            </div>
            <div className="about-me-section">
                <div className="about-me-pic">
                    <img src={myProfile} alt="My Profile"/>
                </div>
                <div className="about-me-description">
                    <div className="about__cards">
                        <article className="about__card">
                            <BsAward className="about__card-icon"/>
                            <h5>Experience</h5>
                            <small>5+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__card-icon"/>
                            <h5>Projects</h5>
                            <small>20+ Projects</small>
                        </article>
                    </div>
                    <p>Hi, I'm Vijay Karthik Bethapudi. Welcome to my digital realm, where the synergy of software engineering and artificial intelligence fuels innovative solutions! With a robust five-year career as a Senior Software Engineer, I've honed my skills in developing complex software and creating seamless, user-centric designs. My recent completion of the Applied AI Solutions Development course has further enhanced my expertise in AI. I’m passionate about integrating cutting-edge technology with frontend mastery to craft intuitive and engaging user experiences. Join me as I explore the dynamic world of tech, blending creativity and advanced problem-solving in every project.
                    </p>
                    <a href="#contact" className="btn">Let's Talk</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
