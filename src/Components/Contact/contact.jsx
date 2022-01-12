
import Footer from '../Footer/footer'

//SASS
import './contact.scss'

//Images

import home from '../../Assets/img/home-solid.svg'
import email from '../../Assets/img/envelope-regular.svg'
import phone from '../../Assets/img/phone-solid.svg'

function Contact() {
    return (
        <section className='contact'>
            <div className="container">
                <div className="contact__wrapper">
                    <h1 className='contact__title'>Contact</h1>
                    <form className='contact__form' action="">
                        <input className="contact__input" name="name" type="text" placeholder='Enter your name...' />
                        <input className="contact__input" name="email" type="text" placeholder='Enter your Email...' />
                        <textarea className="contact__input contact__textarea" name="descpirtion" id="" placeholder='Description...'></textarea>
                        <button type="submit" className='contact__btn'><i>Send</i></button>
                    </form>
                </div>
            </div>
            <Footer />
        </section>

    )
}

export default Contact
{/* <section className='contact'>
                <div className="container">
                    <div className="contact--wrapper">
                        <ul className="contact--list">
                            <li className="contact--item">
                                <img className="contact--icon" src={home} alt="home" />
                                <div className="contact--box">
                                    <h2 className="contact--title">Address</h2>
                                    <p className="contact--text">Tashkent, Chilonzor</p>
                                </div>
                            </li>
                            <li className="contact--item">
                                <img className="contact--icon" src={email} alt="email" />
                                <div className="contact--box">
                                    <h2 className="contact--title">Email</h2>
                                    <a className="contact--text" href="mailto:xusanovbaxtiyor11@gmail.com">xusanovbaxtiyor11@gmail.com </a>
                                </div>
                            </li>
                            <li className="contact--item">
                                <img className="contact--icon" src={phone} alt="phone" />
                                <div className="contact--box">
                                    <h2 className="contact--title">Phone</h2>
                                    <a className="contact--text" href="tel:+998902651107">+998 (90) 265-11-07</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section> */}