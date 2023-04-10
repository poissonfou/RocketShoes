import './Home.css'
import Header from '../../components/Header/Header'
import Footer_socials from '../../components/Footer-socials/Footer-socials'

import main_image from '../../assets/tenis-1-ampliado.png'
import img_1 from '../../assets/tenis-1-galeria.png'
import img_2 from '../../assets/tenis-2-galeria.png'
import img_3 from '../../assets/tenis-3-galeria.png'

function Home(){
    return(
        <>
        <Header />
        <main className="main-section">
            <div className="main-offer">
                <div className='offer-content'>
                    <div className='offer-title'>
                        <h2>Tênis Esportivo Para Corrida Top</h2>
                    </div>
                <p className='product-description'>
                Esse tênis tem o intuito de te deixar ainda mais fitness, focado e musculoso
                </p>
                <p className='price'>R$ 1.000,00</p>
                <button>COMPRAR</button>
                 </div>
            </div>
            <div className="offer-images">
                <img src={main_image} alt="Tênis ampliado" className='main-image'/>
                <div className='secondary-images'>
                    <img src={img_1} alt="Primeira imagem do Carrosel" className='img-one'/>
                    <img src={img_2} alt="Segunda imagem do Carrosel"  className='img-two'/>
                    <img src={img_3} alt="Terceira imagem do Carrosel" className='img-three'/>
                </div>
            </div>
        </main>
        <Footer_socials />
        </>
        )
}

export default Home