"use client"
import React, { useEffect, useState } from 'react'
import styles from './posts.module.css'
import axios from 'axios'

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: number[];
}

const Posts: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts?limit=3&skip=0&select=id,title,reactions,body');
        setData(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        {data.map((res) => (
          <li key={res['id']} className={styles.cardAll}>
            <span className={styles.author}>
        <b>Authors name</b> in <b>Topics name</b>
      </span>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>
                {res['title']}
              </h2>
              <p className={styles.cardDescription}>
                {res['body']}
              </p>
            </div>
            <span className={styles.readTime}>12 min read - Selected for you</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;