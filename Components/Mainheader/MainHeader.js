import Link from "next/link";
import logo from '@/assets/logo.png'
import Image from "next/image";
import classes from './MainHeader.module.css'
import MainHeaderBackground from "./MainHeaderbackground";
import NavLink from "./nav-links";
export default function Header(){
    return(
        <>
        <MainHeaderBackground/>
        <header className={classes.header}>
        <Link className={classes.logo} href="/">
        <Image src={logo} alt="A plate of Rice"  priority/>
        Next Level Food
        </Link>
        <nav className={classes.nav}>
            <ul>
                <li>
        <NavLink href="/meals">Browse Meals</NavLink></li>
        <li>
        <NavLink href="/community">Foodies Community</NavLink></li>
        </ul>
        </nav>
        </header>
        </>
    );
}