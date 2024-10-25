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
          src="/images/coding image.jpg" 
          alt="Coding" 
          width={500} // Adjust width as needed
          height={300} // Adjust height as needed
          className={styles.image} 
        />
        <p className={styles.text}>
          Hi, my name is <span className={styles.highlight}>Mark Kamuya</span>, and I am from Nairobi, Kenya.<br />
          <span className={styles.highlight}>Mission Statement:</span> To foster meaningful connections between people and the systems they use.<br />
          I am a <span className={styles.highlight}>back-end developer</span> and a Freshman pursuing <span className={styles.highlight}>Computer Science</span> at Minerva University.<br />
          I am currently working on a mobile platform that helps buyers save time and money while shopping.<br />
          I am <span className={styles.highlight}>open</span> to new collaborations or work where I can contribute and grow. Feel free to connect with me; contacts are in the contacts bar.<br />
          Apart from coding, I enjoy basketball. Coaching fuels my passion for collaboration, helping others unlock their potential while keeping my competitive spirit alive.<br />
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
