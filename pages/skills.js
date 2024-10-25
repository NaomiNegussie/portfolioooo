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
          <li className={styles.listItem}><strong>SQL</strong>: Intermediate</li>
          <li className={styles.listItem}><strong>Javascript</strong>: Intermediate</li>
        </ul>
        <h2 className={styles.subtitle}>Frameworks</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Flask</strong>: Proficient</li>
          <li className={styles.listItem}><strong>Scikit-learn</strong>: Intermediate</li>
          <li className={styles.listItem}><strong>Seaborn</strong>: Profecient</li>
          <li className={styles.listItem}><strong>Pandas</strong>: Proficient</li>
          <li className={styles.listItem}><strong>Express.js</strong>: Intermediate</li>
          <li className={styles.listItem}><strong>SQLAlchemy</strong>: Intermediate</li>
        </ul>
        <h2 className={styles.subtitle}>Certifications</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Intermediate Machine Learning (Kaggle)</li>
          <li className={styles.listItem}>Data Analysis with Python (FreeCodeCamp)</li>
          <li className={styles.listItem}>Intermediate SQL (SoloLearn)</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
