/* eslint-disable jsx-a11y/anchor-is-valid */
import './index.scss'
import Loader from 'react-loaders'

import Project1 from '../../assests/images/project1.png'
import Project2 from '../../assests/images/project2.png'
import Project3 from '../../assests/images/project3.png'

const Project = () => {

    return (
        <>
            <div className="hero-section">
                <div className="card-grid">
                    <a className="card" href="http://maximus619ristorante.netlify.app" target="_blank" rel="noreferrer">
                        <div className="card__background pr-1" ><img src={Project1} alt="logo" width={1300} height={1100} /></div>
                        <div className="card__content">
                            <h3 className="card__heading">Restaurant App </h3>
                            <p className="card__category">React</p>
                        </div>
                    </a>
                    <a className="card" href="http://doc-clinic.herokuapp.com" target="_blank" rel="noreferrer">
                        <div className="card__background pr-2" ><img src={Project2} alt="logo" width={1300} height={1100} /></div>
                        <div className="card__content">
                            <h3 className="card__heading">Doc-clinic</h3>
                            <p className="card__category">HTML, CSS</p>
                        </div>
                    </a>
                    <a className="card" href="http://vyomweb.herokuapp.com" target="_blank" rel="noreferrer">
                        <div className="card__background pr-3" ><img src={Project3} alt="logo" width={1300} height={1100} /></div>
                        <div className="card__content">
                            <h3 className="card__heading">Vyom Website</h3>
                            <p className="card__category">Flask, MySQL</p>
                        </div>
                    </a>
                </div>
            </div>
            <Loader type="pacman" />
        </>

    )
}

export default Project;