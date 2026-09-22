import "../styles/style.css";

function Header() {

  const title = "La maison jungle";

  return (
    <header className="lmj-title">
      <h1 style={{
        color: 'Red'
      }}>
        {title}</h1>
    </header>
  );
}

export default Header;