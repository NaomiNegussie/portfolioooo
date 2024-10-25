import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1>My Projects</h1>
      
      <ProjectCard 
        title="Fun Calculator" 
        description="Co-developed an interactive calculator aimed at engaging high school students in mathematics. To enhance user engagement and visual appeal, I incorporated emoji reactions throughout the application. The project utilized JavaScript for functionality and interactivity, HTML for structure and layout, and CSS for styling and design."
        technologies="Javascript"
        link="https://github.com/NaomiNegussie/portfolioooo" 
      />
      
      <Footer />
    </div>
  );
};

export default Projects;
