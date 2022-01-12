//Components
import Footer from '../Footer/footer'

//SASS
import './about.scss'

//Images
import myPhoto from '../../Assets/img/myphoto.jpg'

function About() {
    return (
        <section id='about' className='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__box">
                        <h2 className="about__title"><i>About me</i></h2>
                        <ul className="about__list">
                            <li className="about__item">Name: <i>Baxtiyor</i></li>
                            <li className="about__item">Surname: <i>Xusanov</i></li>
                            <li className="about__item">Email address: @xusanovbaxtiyor11@gmail.com</li>
                            <li className="about__item">Phone number: (+998) 90 265-11-07</li>
                            <li className="about__item">Address: Tashkent, Chilonzor</li>
                        </ul>
                    </div>
                    <div className="about__img">
                        <img src={myPhoto} alt="myPhoto" />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default About