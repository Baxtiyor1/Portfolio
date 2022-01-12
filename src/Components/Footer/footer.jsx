

//SASS
import './footer.scss'

//Images
import tg from '../../Assets/img/telegram-brands.svg'
import github from '../../Assets/img/github-brands.svg'
import linkedIn from '../../Assets/img/linkedin-brands.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <ul className='footer__follow'>
                    <li className='footer__subitem'>
                        <a className='footer__link' href="https://t.me/XusanovBaxtiyor11">
                            <img className='footer__img' src={tg} alt="tg" />
                        </a>
                    </li>
                    <li className='footer__subitem'>
                        <a className='footer__link' href="https://github.com/Baxtiyor1">
                            <img className='footer__img' src={github} alt="github" />
                        </a>
                    </li>
                    <li className='footer__subitem'>
                        <a className='footer__link' href="#/">
                            <img className='footer__img' src={linkedIn} alt="linkedIn" />
                        </a>
                    </li>
                </ul>
                <p className='footer__text'>Copyright Xusanov Baxtiyor © 2022. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer