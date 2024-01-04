import classes from "./main-header.module.css";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import Background from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
  const item = { name: "Burger", price: 22.99 };

  console.log({ ...item });
  return (
    <>
      <Background />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={Logo} alt="logo" priority />
          NEXTLEVEL FOOD
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Brouse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
