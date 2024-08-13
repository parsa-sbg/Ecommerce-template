import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";




export default function Footer() {
    return (
        <footer className="footer bg-[#15191e] text-[#a6adbb] p-10">
            <nav>
                <h6 className="footer-title">Support</h6>
                <span className="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
                <span className="">exclusive@gmail.com</span>
                <span className="">+88015-88888-9999</span>
            </nav>

            <nav>
                <h6 className="footer-title">Account</h6>
                <Link to={'register'} className="link link-hover">Register</Link>
                <Link to={'login'} className="link link-hover">Login</Link>
                <Link to={'wishlist'} className="link link-hover">Wishlist</Link>
            </nav>

            <nav>
                <h6 className="footer-title">Quick Link</h6>
                <Link to={'contact'} className="link link-hover">Contact</Link>
                <Link to={'about'} className="link link-hover">About us</Link>
                <Link to={'/'} className="link link-hover">home</Link>
            </nav>
            
            <nav>
                <h6 className="footer-title">Socials</h6>
                <div className="flex items-center justify-between flex-wrap gap-2">
                <a className="cursor-pointer" ><FaTelegram size={30} /></a>
                <a className="cursor-pointer" ><FaInstagram size={30} /></a>
                <a className="cursor-pointer" ><FaLinkedin size={30} /></a>
                </div>
            </nav>
            
        </footer>)
}
