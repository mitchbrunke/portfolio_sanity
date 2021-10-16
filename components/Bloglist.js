import styles from "../styles/Bloglist.module.css";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

const BlogList = ({ posts }) => {
  return (
    <div className={styles.blogs}>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <Image
            src={urlFor(post.mainImage).url()}
            alt="blog image"
            width={1000}
            height={500}
            layout="intrinsic"
          ></Image>

          <Link href={`posts/ ${post.slug}`}>
            <a id={styles.read_more}>
              <h3 id={styles.title}>{post.title}</h3>
              <p>Read Post</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
