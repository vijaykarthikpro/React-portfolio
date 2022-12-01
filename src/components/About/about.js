import "./about.scss";
import myProfile from '../../assets/images/my-profile.jpg'
import {BsAward} from 'react-icons/bs';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
        <div className="container about-container">
            <div className="content flex-centered">
                <span>About me</span>
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
                            <small>4+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__card-icon"/>
                            <h5>Projects</h5>
                            <small>5+ Projects</small>
                        </article>
                    </div>
                    <p>Hi, I'm Vijay Karthik Bethapudi, a software developer with strong coding and design skills. I was born in 1996 in Hyderabad, India. With more than five projects, including frontend, backend, and Android programming, I worked at two startups. I adore adding UI animations and improving products with strong, useful, and distinctive interfaces that are simple to use.</p>
                    <a href="#contact" className="btn">Let's Talk</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
