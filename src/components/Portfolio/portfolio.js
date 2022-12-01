import './portfolio.scss';
import React from 'react';
import IMG1 from '../../assets/images/portfolio1.png';
import IMG2 from '../../assets/images/portfolio2.png';
import IMG3 from '../../assets/images/portfolio3.png';

const Portfolio = ()=>{

    const data = [
        {
            id: 1,
            image: IMG3,
            title: "Custom React portfolio website",
            github: "https://github.com/vijaykarthikpro/React-portfolio",
            demo: "https://vijaykarthikpro.com"
        },
        {
            id: 2,
            image: IMG1,
            title: "Ecommerce website with ReactJS",
            github: 'https://github.com/pesto-students/little-tags-vijaykarthikpro',
            demo: 'https://style-beast.netlify.app/' 
        },
        {
            id: 3,
            image: IMG2,
            title: "Gameplay website with ReactJS",
            github: 'https://github.com/pesto-students/fastfingers-vijaykarthikpro',
            demo: 'https://fastfingers-site.netlify.app/'
        }
    ]
    return (
        <section id="portfolio">
            <div className='container portfolio_container'>
                <div className='content flex-centered'>
                    <span>Portfolio</span>
                </div>
                <div className='portfolio__items'>
                    {
                        data.map(({id, image, title, github, demo})=>{
                            return (
                                <article key={id} className='portfolio__item'>
                                    <div className='portfolio__item-image'>
                                        <img src={image} alt={title}/>
                                    </div>
                                    <h3>{title}</h3>
                                    <div className='portfolio__item-cta'>
                                        <a href='https://style-beast.netlify.app/' className='btn' rel="noreferrer" target='_blank'>Live Demo</a>
                                        <a href='https://github.com/pesto-students/little-tags-vijaykarthikpro' className='btn' rel="noreferrer" target='_blank'>Github</a>
                                    </div>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio