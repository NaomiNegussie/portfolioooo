import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Skills.module.css'; // This should match the filename

const SkillsPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Skills & Certifications</h1>
        <h2 className={styles.subtitle}>Programming Languages</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Python</strong>: Proficient</li>
          <li className={styles.listItem}><strong>Javascript</strong>: Intermediate</li>
        </ul>
        <h2 className={styles.subtitle}>Frameworks</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Matplotlib</strong>: Profecient</li>
          <li className={styles.listItem}><strong>Pandas</strong>: Intermediate</li>
        </ul>
        <h2 className={styles.subtitle}>Certifications</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Python Developer (SoloLearn)</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
