
import Footer from '../Footer/footer'

//SASS
import './contact.scss'

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