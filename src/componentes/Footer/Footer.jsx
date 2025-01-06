/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './Logo.png';
import './Footer.css'

const Footer = () => {
    return < div className="pie">
        <a className='logo__pie'><img src={logo} alt='Logo'/></a>
        <h5>Creado para <a href="https://www.oracle.com/co/education/oracle-next-education/" target='_blank' rel='noreferrer'>Oracle ONE</a> - Por: Jhon James Diaz Cardona 2024 </h5>
    </ div>
}

export default Footer;