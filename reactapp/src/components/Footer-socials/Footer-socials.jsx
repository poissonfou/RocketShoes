import './Footer-socials.css'
import arrow from '../../assets/icon-arrow.svg'
import video from '../../assets/img-video.png'

function Footer_socials(){
    return(
        <footer>
            <img src={video} alt="thumbnail de vídeo" />

            <div className='socials'>
                <p>FACEBOOK</p>
                <p>INSTAGRAM</p>
                <p>YOUTUBE</p>
                <p>TWITTER</p>
            </div>

            <div className='explore'>
                <p>EXPLORE MAIS</p>
                <img src={arrow} alt="ícone de seta" />
            </div>
        </footer>
    )
}

export default Footer_socials