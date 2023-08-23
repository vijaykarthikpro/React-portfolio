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
                    <p>Hi, I'm Vijay Karthik Bethapudi. Welcome to my digital realm, where software innovation meets the art of data science! With a robust five-year expedition in software development, I've honed my skills in crafting intricate codes and architecting intuitive solutions. But the thrill of learning continues to propel me forward.
                    Currently, I'm immersing myself in the captivating universe of Data Science through the Applied AI Solutions Development course. Join me as I traverse the ever-evolving landscapes of technology, leaving a trail of creativity and problem-solving along the way.
                    </p>
                    <a href="#contact" className="btn">Let's Talk</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
