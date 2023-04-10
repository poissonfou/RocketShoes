import './Home.css'
import Header from '../../components/Header/Header'
import Footer_socials from '../../components/Footer-socials/Footer-socials'

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

            </div>
        </main>
        <Footer_socials />
        </>
        )
}

export default Home