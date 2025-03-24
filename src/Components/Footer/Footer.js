import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start py-4 mt-auto">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <span>Designed and developed by Priyanka Patnam</span>
        </div>
        <div >
        Copyright © 2025: Priyanka Patnam
      </div>
        <div>
          <a href="https://www.linkedin.com/in/patnam-priyanka-973955218/" className="text-body mx-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/priyankapatnam6" className="text-body mx-2" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
