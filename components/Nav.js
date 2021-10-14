//imports
import { useState } from "react";
import { useRouter } from "next/router";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

const Nav = () => {
  //set state for Nav to open and close
  const [openNav, setNavOpen] = useState(false);
  //use router to be able to highlight the active link, a little hacky but it seems to be the better fix (Next.js things)
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              src="/logo.png"
              height={300}
              width={300}
              layout="intrinsic"
            ></Image>
          </a>
        </Link>
      </div>

      <nav
        className={openNav ? styles.open_nav : styles.nav}
        //  toggle to close the nav with state
        onClick={(e) => {
          openNav ? setNavOpen(!openNav) : "";
        }}
      >
        <ul>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>
              <li>home</li>
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "active" : ""}>
              <li>about</li>
            </a>
          </Link>
        </ul>
      </nav>

      <Link href="/">
        <a>
          <div className={styles.contactIcon}>
            <MailOutlineIcon color="disabled" fontSize="large" />
          </div>
        </a>
      </Link>

      {/* Toggle to open and close the nav */}

      <div
        className={styles.toggle}
        onClick={(e) => {
          setNavOpen(!openNav);
        }}
      >
        <MenuIcon className={styles.toggle} fontSize="large" />
      </div>
    </div>
  );
};

export default Nav;
