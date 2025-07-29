import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logo} alt="image with food plate" />
          Next lavel food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
