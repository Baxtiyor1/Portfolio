import { NavLink, Link } from 'react-router-dom'
import { useRef, useState } from 'react'
//SASS
import './Header.scss'

//IMGES
import myPhoto from '../../Assets/img/myphoto.jpg' 

function Header() {
    let list = useRef()
    let [scrollNav, setScrollNav] = useState('')

    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            setScrollNav("header__active");
        } else {
            setScrollNav('')
        }
      });

    return (
        <header className={`header ${scrollNav}`}>
            <div style={{ display: 'none' }}>
                {/* bar icon */}
                <svg width="20" height="17" className="hidden">
                    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17" id="bar_icon">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.6364 3H1.36364C0.61 3 0 2.328 0 1.5C0 0.672 0.61 0 1.36364 0H18.6364C19.3891 0 20 0.672 20 1.5C20 2.328 19.3891 3 18.6364 3ZM1.36364 7H18.6364C19.3891 7 20 7.672 20 8.5C20 9.328 19.3891 10 18.6364 10H1.36364C0.61 10 0 9.328 0 8.5C0 7.672 0.61 7 1.36364 7ZM18.6364 14H1.36364C0.61 14 0 14.672 0 15.5C0 16.328 0.61 17 1.36364 17H18.6364C19.3891 17 20 16.328 20 15.5C20 14.672 19.3891 14 18.6364 14Z"></path>
                    </symbol>
                </svg>
                {/* theme icon */}
                <svg width="22" height="22" className="hidden">
                    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" id="theme_icon">
                        <path d="M22.772 9.50599L17.154 7.31399L14.994 0.813988C14.892 0.506988 14.604 0.299988 14.282 0.299988C13.96 0.299988 13.672 0.506988 13.57 0.812988L11.41 7.31299L5.79 9.50499C5.503 9.61699 5.313 9.89499 5.313 10.205C5.313 10.515 5.503 10.79 5.791 10.903L11.411 13.095L13.571 19.595C13.673 19.901 13.961 20.108 14.283 20.108C14.605 20.108 14.893 19.901 14.995 19.595L17.155 13.095L22.775 10.903C23.062 10.791 23.252 10.513 23.252 10.203C23.252 9.89299 23.062 9.61799 22.774 9.50599H22.772ZM16.282 11.826C16.074 11.906 15.912 12.076 15.842 12.286L14.282 16.981L12.722 12.288C12.652 12.078 12.492 11.908 12.284 11.826L8.129 10.206L12.283 8.58399C12.491 8.50399 12.653 8.33399 12.723 8.12199L14.283 3.42899L15.843 8.12299C15.913 8.33499 16.073 8.50499 16.281 8.58599L20.436 10.206L16.281 11.828L16.282 11.826ZM6.663 2.81199H4.783V1.04999C4.783 0.635988 4.446 0.299988 4.033 0.299988C3.62 0.299988 3.283 0.635988 3.283 1.04999V2.81199H1.5C1.086 2.81199 0.75 3.14799 0.75 3.56199C0.75 3.97599 1.086 4.31199 1.5 4.31199H3.282V6.07399C3.282 6.48799 3.618 6.82399 4.032 6.82399C4.446 6.82399 4.782 6.48799 4.782 6.07399V4.31199H6.662C7.077 4.31199 7.412 3.97599 7.412 3.56199C7.412 3.14799 7.077 2.81199 6.662 2.81199H6.663ZM9.198 18.434H8.098V17.418C8.098 17.004 7.763 16.668 7.348 16.668C6.933 16.668 6.598 17.004 6.598 17.418V18.434H5.57C5.156 18.434 4.82 18.77 4.82 19.184C4.82 19.598 5.156 19.934 5.57 19.934H6.6V20.95C6.6 21.364 6.935 21.7 7.35 21.7C7.765 21.7 8.1 21.364 8.1 20.95V19.934H9.198C9.612 19.934 9.948 19.598 9.948 19.184C9.948 18.77 9.612 18.434 9.198 18.434Z"></path>
                    </symbol>
                </svg>
            </div>

            <div className='container'>
                <nav className='header__nav'>
                    <button className='header__bar--btn' onClick={() => {
                        list.current.classList.add('header__modal--active')
                    }}>
                        <svg className={`icon`}>
                            <use xlinkHref="#bar_icon"></use>
                        </svg>
                    </button>
                    <Link to='/'>
                    <h1 className='header__title'>{`{BX}`}</h1>
                    </Link>
                    <button className='header__bar--btn'>
                        <svg className={`icon`}>
                            <use xlinkHref="#theme_icon"></use>
                        </svg>
                    </button>
                </nav>
                <div ref={list} className='header__modal'>
                    <div className='header__list'>
                        <img className='header__list--img' src={myPhoto} alt="myphoto" />
                        <div className='header__list--box'>
                            <NavLink className='header__list--link' to='/about'>About</NavLink>
                            <NavLink className='header__list--link' to='/texnology'>Technology</NavLink>
                            <NavLink className='header__list--link' to='/portfolio'>Portfolio</NavLink>
                            <NavLink className='header__list--link' to='/contact'>Contact</NavLink>
                        </div>
                    </div>
                    <button className='header__modal--close' onClick={()=>{
                        list.current.classList.remove('header__modal--active')
                    }}>X</button>
                </div>
            </div>
        </header>
    )
}
export default Header