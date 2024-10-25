import Link from 'next/link';
import styles from './Navbar.module.css'; // Optional: Create a CSS module for styling

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/skills">Skills & Certifications</Link>
    </nav>
  );
};

export default Navbar;
