import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image'; // Use the Next.js Image component
import styles from './Home.module.css'; // Adjust the path as needed

const About = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <div className={styles.container}>
        <Image 
          src="/images/Naomi coding image.jpg" 
          alt="Coding" 
          width={500} // Adjust width as needed
          height={300} // Adjust height as needed
          className={styles.image} 
        />
        <p className={styles.text}>
          Hi, I am <span className={styles.highlight}>Naomi Negussie</span>from Addis Ababa, Ethiopia.<br />
          <span className={styles.highlight}>Mission Statement:</span> To build scalable and efficient systems that empower users, enabling them to make informed decisions and achieve their goals with ease.<br />
          I am a <span className={styles.highlight}>back-end developer</span> and a freshman studying <span className={styles.highlight}>Computer Science</span> at Minerva University.<br />
          I am <span className={styles.highlight}>open</span> to new collaborations or opportunities where I can contribute and grow. Feel free to connect with me-my contact information is in the contact bar.<br />
          Outside of coding, I enjoy hiking. I love the challenge of discovering new trails and connecting with the outdoors, which inspires my creativity in both life and work.<br />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
