//SASS
import './notfound.scss'

// IMAGE
import Error404 from '../../Assets/img/404.png'

function NotFound(){
    return(
        <div className='notfound'>
            <img src={Error404} alt="Error404" />
        </div>
    )
}

export default NotFound