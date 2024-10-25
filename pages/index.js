import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './Home.module.css'; // Adjust the path if necessary

const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I’m <span className={styles.highlight}>Mark Kamuya</span>, a passionate <span className={styles.highlight}>backend developer</span> with a keen interest in <span className={styles.highlight}>Software Development</span>. I love leveraging technology to create impactful solutions that make life better.</p>
        </div>
        <Image 
          src="/images/Mark's LinkedIn Pic.jpg" // Ensure the path is correct
          alt="Mark Kamuya"
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;