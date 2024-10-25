import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <h1>My Projects</h1>
      
      <ProjectCard 
        title="Water For Her" 
        description="Developed a mobile application to help women in Arid and Semi-Arid Lands efficiently locate nearby water sources, saving time and effort in water collection."
        technologies="Python, GeoJSON, NASA S.W.O.T dataset"
        link="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/gaiax/?tab=project" 
      />
      
      <ProjectCard 
        title="SnapShop" 
        description="Co-founded a mobile platform to help Minerva University students find the cheapest products in San Francisco, promoting financial savings."
        technologies="Python, PostgreSQL, Flask, Pandas"
        link="https://github.com/markkamuya/applicationalee"
      />
      
      <Footer />
    </div>
  );
};

export default Projects;
