//Components
import Footer from '../Footer/footer'

//SASS
import './portfolio.scss'

//Images
import youtube from '../../Assets/img/youtube_img.png'
import tasmim from '../../Assets/img/tasmim_img.png'
import movies_page from '../../Assets/img/movies_page.png'
import audiophile from '../../Assets/img/audiophile_img.png'
import pixer from '../../Assets/img/pixer_img.png'
import scoot from '../../Assets/img/scoot_img.png'

function Portfolio() {
    return (
        <section className='home__portfolio'>
            <div className="container">
                <div className="home__portfolio--wrapper">
                    <h1 className='home__portfolio--title'>Portfolio</h1>
                    <ul className='home__portfolio--list'>
                        <li className='home__portfolio--item'>
                            <a rel="noopener noreferrer" href="https://youtube-b.netlify.app/">
                                <img className='home__portfolio--pic' src={youtube} alt="youtube" />
                            </a>
                            <h2 className='home__portfolio--subtitle'>YouTube</h2>
                        </li>
                        <li className='home__portfolio--item'>
                            <a rel="noopener noreferrer" href="https://tasmim-xb.netlify.app/">
                                < img className='home__portfolio--pic' src={tasmim} alt="tasmim" />
                            </a>
                            <h2 className='home__portfolio--subtitle'>Tasmim</h2>
                        </li>
                        <li className='home__portfolio--item'>
                            <a rel="noopener noreferrer" href="https://movies-page-js.netlify.app/">
                                <img className='home__portfolio--pic' src={movies_page} alt="movies_page" />
                            </a>
                            <h2 className='home__portfolio--subtitle'>Movies</h2>
                        </li>
                        <li className='home__portfolio--item'>
                            <a rel="noopener noreferrer" href="https://project-audiophile.netlify.app/">
                                <img className='home__portfolio--pic' src={audiophile} alt="audiophile" />
                            </a>
                            <h2 className='home__portfolio--subtitle'>"Audiophile", online shop</h2>
                        </li>
                        <li className='home__portfolio--item'>
                            <a rel="noopener noreferrer" href="https://project-pixer.netlify.app/">
                                <img className='home__portfolio--pic' src={pixer} alt="movies_page" />
                            </a>
                            <h2 className='home__portfolio--subtitle'>Pixer</h2>
                        </li>
                        <li className='home__portfolio--item'>
                            <a rel="noopener noreferrer" href="https://project-scoot.netlify.app/">
                                <img className='home__portfolio--pic' src={scoot} alt="movies_page" />
                            </a>
                            <h2 className='home__portfolio--subtitle'>Scoot</h2>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Portfolio