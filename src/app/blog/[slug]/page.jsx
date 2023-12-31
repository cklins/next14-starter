import Image from "next/image";
import styles from "./singlePost.module.css";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);

  return {
    title: post.title,
    description: post.body,
  };
};

const SinglePostPage = async ({ params }) => {
  console.log(params);
  const post = await getData(params.slug);

  return (
    <div className={styles.container}>
      {/* {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )} */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
