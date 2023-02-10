function Header() {
    return (
        <header className="header">
            <img src={require("../images/TrollFace.png")} alt=""
            className="header--image"/>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
  }
  
  export default Header;