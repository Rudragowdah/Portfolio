// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
            {/* <img src={logo} alt="logo" /> */}
            <p style={{fontSize:'35px'}}>HRG</p>
            </div>
            <div className=" items-center flex justify-center gap-6 text-4xl">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
            </div>
        </nav>
    </div>
  )
}

export default Navbar
