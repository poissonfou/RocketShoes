import "./Header.css";
import logo from "../../assets/logo.svg";
import search from "../../assets/icon-search.svg";
import bag from "../../assets/icon-bag.svg";

function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <div className="categories">
          <p>HOMEM</p>
          <p>MULHER</p>
          <p>CRIANÇA</p>
          <p>CUSTOMIZAR</p>
        </div>

        <div className="input-div">
          <img src={search} alt="search icon" />
          <input type="text" placeholder="Pesquisar" />
        </div>

        <img src={bag} alt="image bag" className="bag-image" />
      </header>
    </>
  );
}

export default Header;
