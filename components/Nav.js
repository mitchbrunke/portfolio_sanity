import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

// You will notice the use of a secondary nav list
//I saw someone on stack talking about how it could be a nice solution for a nav toggle but it sucks and will be removed

const Nav = () => {
  const [openNav, setNavOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    console.log("useeffect ran");
    console.log(openNav);
  }, [openNav]);

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

      <nav className={openNav ? styles.open_nav : styles.nav}>
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
