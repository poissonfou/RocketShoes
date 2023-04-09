import "./Header.css"
import logo from '../../assets/logo.svg'
import search from '../../assets/icon-search.svg'
import bag from '../../assets/icon-bag.svg'

function Header(){
    return(
        <>
        <header className="header">
            <img src={logo} alt="Logo da empresa" className="logo"/>
            <div className="categories">
                <p>HOMEM</p>
                <p>MULHER</p>
                <p>CRIANÇA</p>
                <p>CUSTOMIZAR</p>
            </div>

            <div className="input-div">
                <img src={search} alt="Ícone de pesquisa" />
                <input type="text" placeholder="Pesquisar" />
            </div>

            <img src={bag} alt="Ícone de sacola de compras" className="bag-image"/>
        </header>
        </>
    )
}

export default Header

