import './experience.scss';
import {HiBadgeCheck} from 'react-icons/hi';

const Experience = ()=>{
    const frontendDev = [
        {
            id: 1,
            title: 'HTML5',
            level: 'Experienced'
        },
        {
            id: 2,
            title: 'CSS / SCSS',
            level: 'Intermediate'
        },
        {
            id: 3,
            title: 'Javascript',
            level: 'Experienced'
        },
        {
            id: 4,
            title: 'Python',
            level: 'Experienced'
        },
        {
            id: 5,
            title: 'React',
            level: 'Intermediate'
        },
        {
            id: 6,
            title: 'Java',
            level: 'Intermediate'
        },
    ]

    const backendDev = [
        {
            id: 1,
            title: 'MYSQL',
            level: 'Experienced'
        },
        {
            id: 2,
            title: 'MongoDB',
            level: 'Experienced'
        },
        {
            id: 3,
            title: 'Node JS',
            level: 'Experienced'
        },
        {
            id: 4,
            title: 'AWS',
            level: 'Intermediate'
        },
        {
            id: 5,
            title: 'GCP',
            level: 'Intermediate'
        },
        {
            id: 6,
            title: 'Azure',
            level: 'Intermediate'
        },
    ]

    return (
        <section id='experience'>
             <div className='container experience__container'>
                <div className='content flex-centered'>
                    <span>EXPERIENCE</span>
                </div>
                <div className='experience__description'>
                    <div className='experience__frontend experience__description-item'>
                        <h3>Frontend Development</h3>
                        <div className='experience__content'>
                            {
                                frontendDev.map(({id, title, level})=>{
                                    return (
                                        <article key={id} className='experience__details'>
                                            <HiBadgeCheck className='experience__icon'/>
                                            <div>
                                                <h4>{title}</h4>
                                                <small className='text-light'>{level}</small>
                                            </div>
                                        </article>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                    <div className='experience__backend experience__description-item'>
                        <h3>Backend Development</h3>
                        <div className='experience__content'>
                            {
                                backendDev.map(({id, title, level})=>{
                                    return (
                                        <article key={id} className='experience__details'>
                                            <HiBadgeCheck className='experience__icon'/>
                                            <div>
                                                <h4>{title}</h4>
                                                <small className='text-light'>{level}</small>
                                            </div>
                                        </article>
                                    )
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience