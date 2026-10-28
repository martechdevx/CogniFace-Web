import { useState } from "react";
import {
  FaArrowRight,
  FaBell,
  FaBook,
  FaChartLine,
  FaCode,
  FaImage,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import styles from "./Blog.module.css";

const posts = [
  {
    id: 1,
    tag: "Technology",
    title: "How FAISS powers fast face search",
    excerpt:
      "A look at how similarity search helps CogniFace find a likely match quickly, and what happens behind the scenes as enrollment records grow.",
    date: "Aug 2025",
    readTime: "5 min read",
    icon: FaCode,
  },
  {
    id: 2,
    tag: "Security",
    title: "How CogniFace manages secure sessions",
    excerpt:
      "Access and refresh tokens are stored in HttpOnly cookies, keeping session credentials out of page scripts while the browser sends them with authenticated requests.",
    date: "Jul 2025",
    readTime: "4 min read",
    icon: FaLock,
  },
  {
    id: 3,
    tag: "Education",
    title: "Face enrollment in schools: a practical guide",
    excerpt:
      "Explore practical considerations for campus workflows, from photo quality to organizing student and staff records.",
    date: "Jun 2025",
    readTime: "7 min read",
    icon: FaBook,
  },
  {
    id: 4,
    tag: "Product",
    title: "Understanding similarity scores",
    excerpt:
      "Learn what the score from a verification means and how to interpret high, moderate, and low-confidence results.",
    date: "Jun 2025",
    readTime: "4 min read",
    icon: FaChartLine,
  },
  {
    id: 5,
    tag: "Privacy",
    title: "We store vectors, not photos",
    excerpt:
      "CogniFace stores mathematical embeddings rather than raw face images in its relational database. Here’s why that distinction matters.",
    date: "May 2025",
    readTime: "6 min read",
    icon: FaShieldAlt,
  },
  {
    id: 6,
    tag: "Guide",
    title: "Image quality tips for better enrollment",
    excerpt:
      "Lighting, angle, resolution, and background all affect photo quality. Use these guidelines to get a clearer enrollment image.",
    date: "Apr 2025",
    readTime: "3 min read",
    icon: FaImage,
  },
];

const tags = ["All", "Technology", "Security", "Education", "Product", "Privacy", "Guide"];

function PostCard({ post, featured = false }) {
  const Icon = post.icon;

  return (
    <article className={`${styles.postCard} ${featured ? styles.featuredCard : ""}`}>
      <div className={styles.cardIcon}><Icon aria-hidden="true" /></div>
      <div className={styles.cardBody}>
        <div className={styles.cardEyebrow}>
          <span>{post.tag}</span>
          {featured && <span className={styles.featuredLabel}>Editor’s pick</span>}
        </div>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <div className={styles.cardMeta}>
          <span>{post.date}</span>
          <i />
          <span>{post.readTime}</span>
          <span className={styles.readLabel}>Read article <FaArrowRight aria-hidden="true" /></span>
        </div>
      </div>
    </article>
  );
}

function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? posts : posts.filter(post => post.tag === activeTag);
  const featuredPost = activeTag === "All" ? filtered[0] : null;
  const visiblePosts = featuredPost ? filtered.slice(1) : filtered;

  return (
    <main className={styles.blogPage}>
      <header className={styles.blogHeader}>
        <span className={styles.eyebrow}>THE COGNIFACE BLOG</span>
        <h1>Ideas for a more <span>confident identity</span> workflow.</h1>
        <p>
          Notes and perspectives on face verification, privacy, security, and the work of
          building better campus tools.
        </p>
      </header>

      <nav className={styles.tagFilter} aria-label="Filter journal by topic">
        {tags.map(tag => (
          <button
            type="button"
            key={tag}
            className={activeTag === tag ? styles.activeTag : ""}
            aria-pressed={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </nav>

      {featuredPost && <PostCard post={featuredPost} featured />}

      <section className={styles.postGrid} aria-label="Journal articles">
        {visiblePosts.map(post => <PostCard key={post.id} post={post} />)}
      </section>

      <aside className={styles.journalNote}>
        <span className={styles.noteIcon}><FaBell aria-hidden="true" /></span>
        <div>
          <span className={styles.eyebrow}>MORE FROM COGNIFACE</span>
          <h2>More useful ideas, coming soon.</h2>
          <p>We’re working on new notes about identity, security, and campus technology.</p>
        </div>
      </aside>
    </main>
  );
}

export default Blog;
