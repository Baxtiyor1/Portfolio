import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

//SASS
import './Home.scss'




function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <section className='intro'>
                <div className='container'>
                    <div className='intro__wrapper'>
                        <h1 data-aos="zoom-in" data-aos-offset="-500" data-aos-duration="2000" className='intro__title'>Baxtiyor Xusanov</h1>
                        <h2 data-aos="zoom-in" data-aos-offset="-500" data-aos-duration="2000" className='intro__subtitle'>Frontend Developer</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home