import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaaderBackground from "./main-header-background";

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
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
