import Posts from "@/components/posts/Posts";
import Image from "next/image";
import styles from './homepage.module.css'
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className={styles.container}>
      <Hero/>
      <Posts/>
    </main>
  );
}
