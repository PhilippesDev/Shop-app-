import Header from "../Header";
import Description from "../Description";
import logo from '../../assets/leaf+1.png';
import "../../styles/style.css";

function Banner()
{
      return (
      <>
      <div className="lmj-banner">
        <Header />
        <Description />
        <img src={logo} alt="Logo" className="lmj-logo" />
      </div>
      </>
  );
}

export default Banner;