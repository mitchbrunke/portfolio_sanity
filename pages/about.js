import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.feature}>
          <div className={styles.text}>
            <p>
              <span id={styles.hello}>Hi,</span> <br />
              My name is Mitch Brunke and I am a Hervey Bay based front-end
              developer with a background in SEO and paid Ads. I have spent most
              of my life living near the spectacular Fraser Island and obtained
              my degree on the Sunshine Coast at USC where I found my passion
              for creating websites that look top notch and rank well on Google.
              When I am not coding or doig tech things you will find me
              somewhere near a boat with a fishing rod in my hand or near some
              form of motorsport.
            </p>

            <p>
              If you would like a copy of my resume I am more than happy to
              provide it upon request.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/me.jpg"
              width={550}
              height={400}
              layout="intrinsic"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
