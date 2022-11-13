import "./about.scss";
import myProfile from '../../assets/images/my-profile.jpg'

const About = () => {
  return (
    <div className="container">
        <div class="content flex-centered">
            <span>About me</span>
        </div>
        <div className="about-me-section">
            <div className="about-me-pic">
                <img src={myProfile} alt="My Profile"/>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </div>
  );
};

export default About;
