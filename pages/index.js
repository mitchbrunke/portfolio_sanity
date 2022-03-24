//imports
import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";
import { urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Link from "next/link";
import BlogList from "../components/Bloglist";

//Get Sanity Data - using GROC
//Accessibility to be added & footer component to be updated, looks a little gross

const heroDataQuery = `*[_type == "home_slider"]`;
const postDataQuery = `*[_type == "post"]{
  
  "slug": slug.current,
  title,
  mainImage,
  excerpt
}`;

//array of logo src's

const logosArray = [
  "/mn.png",
  "/the-coding-company-1.webp",
  "/hervey-bay-seafood-fesitval-logo.svg",
  "/1519861182301__1.png",
  "/vivere.png",
];

export default function Home({ heroData, posts }) {
  return (
    <div className={styles.container}>
      {/* SEO Controlled Here */}
      <Head>
        <title>
          Full Stack Engineer | Mitch Brunke
        </title>
        <meta
          name="description"
          content="I am a front-end developer based in Queensland, Australia "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* slider with sanity data passed through */}

        <Slider heroData={heroData} />

        <section className={styles.about}>
          <div className={styles.bigText}>
            <h5>
              I am a Full Stack Engineer developer based in Queensland, Australia. I
              mainly work with React, Node.js and I am currently learning Python.
            </h5>
          </div>
          <div className={styles.littleText}>
            <p>
              I have been working in Web Development since 2014 in both remote
              and office settings. Below is my preferred tech stack but I am
              always open to learning new tools for to overcome a particular
              challenge.
            </p>
          </div>
        </section>

        <hr />

        <section className={styles.logoContainer}>
          <h3>A few folks I have worked with.</h3>
          <div className={styles.logos}>
            {/* Map over lgos array to return the logo list - alt tags to be added to array also*/}
            {logosArray.map((logo) => (
              <div className={styles.logo}>
                <Image
                  src={logo}
                  alt="logo"
                  width={500}
                  height={500}
                  layout="intrinsic"
                ></Image>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.projects}>

          <div className={styles.project} id={styles.vfc}>
            <div className={styles.p_text}>
              <h5>Ask ECH</h5>
              <p>
                I have been working on a React Native app involving serverless technologies and a complex UI. <br />
              </p>

            </div>
            <div className={styles.p_img}>
              <Image
                src="/rn.png"
                alt="vfc image"
                width={1000}
                height={500}
                layout="intrinsic"
              ></Image>
            </div>
          </div>

          <div className={styles.project}>
            <div className={styles.p_text}>
              <h5>Hervey Bay Seafood Festival</h5>
              <p>
                This project brief was simple: Take the designs and build a
                website that will remain fast and not crash when tickets go live
                and be easy to navigate on mobile. <br /> The solution was to
                rebuild the dated WordPress site with more modern technologies
                such as Next.js and Sanity CMS.{" "}
              </p>
              <Link href="https://www.herveybayseafoodfestival.com.au/">
                <a>View Project</a>
              </Link>
            </div>
            <div className={styles.p_img}>
              <Image
                src="/hbsf header.png"
                alt="vfc image"
                width={1000}
                height={500}
                layout="intrinsic"
              ></Image>
            </div>
          </div>


        </section>

        {/* <hr /> */}

        <section className={styles.blogSection}>
          <BlogList posts={posts} />
        </section>
      </main>
    </div>
  );
}

//get static props from Sanity.

export async function getStaticProps() {
  const heroData = await getClient().fetch(heroDataQuery);
  const posts = await getClient().fetch(postDataQuery);

  return { props: { heroData, posts } };
}
