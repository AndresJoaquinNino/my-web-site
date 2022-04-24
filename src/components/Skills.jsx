import './Skills.scss';
import { MdArrowRight } from 'react-icons/md';

const ListSkills = ({title,skills}) => {
    return(
        <div className="skills-set">
            <h2 className='skills-set-title'>{ title }</h2>
            <hr className='divider-light-transparent'/>
            <ul className='skills-set__list'>
            {
                skills.map((ele,index) => (
                    <li key={index} className='skills-set__list-item'>
                        <div className='skills-set__list-icon'>
                            <MdArrowRight/>
                        </div>
                        <span>{ ele }</span>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

const Skills = () => {
    const frontendSkills = ['React','JavaScript +ES6','Sass/Scss','Html/Css'];
    const backedSkills = ['Php','Sql Server','My Sql','Firebase'];
    const othersSkills = ['English','Git/Github'];

    return (
        <div className='page__skills'>
            <header className='page__skills-header gradient-text'>
                <h1>My skill set</h1>
                <hr className='divider-secondary' />
            </header>
            <div className='page__skills-content'>
                <ListSkills title='Frontend' skills={frontendSkills}/>
                <hr className='divider-light-transparent divider--only-desk'/>
                <ListSkills title='Backend' skills={backedSkills}/>
                <hr className='divider-light-transparent divider--only-desk'/>
                <ListSkills title='Others' skills={othersSkills}/>
            </div>
        </div>
    );
}

export default Skills;