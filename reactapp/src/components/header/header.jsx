import "../header/header.css";

function Header(){
    return(
        <>
        <header className="header">
            <img src="../../assets/logo.svg" alt="Logo da empresa" />
            <div className="categories">
                <p>HOMEM</p>
                <p>MULHER</p>
                <p>CRIANÇA</p>
                <p>CUSTOMIZAR</p>
            </div>

            <div className="input">
                <img src="../../assets/icon-search.svg" alt="Ícone de pesquisa" />
                <input type="text" placeholder="Pesquisar" />
            </div>

            <img src="../../assets/icon-bag.svg" alt="Ícone de sacola de compras" />
        </header>
        </>
    )
}

export default Header

