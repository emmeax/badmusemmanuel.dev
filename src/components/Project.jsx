import React from 'react'
import { motion } from 'framer-motion'
import Timer from '../assets/Timer.jpg'
import Prestmit from '../assets/prestmit.jpg'
import Reacts from '../assets/Reacts.png'
import Image2025 from '../assets/Image2025.png'
import Profilepics from '../assets/Profilepics.png'
import nexantlog from '../assets/nexantlog.png'
import Vault from '../assets/Vault.jpg'

const projects = [
  {
    id: 1,
    name: "Nexant cosult",
    technologies: "Front-end",
    image: nexantlog,
    
    url:"https://nexantconsult.com/"
  },
  {
    id: 2,
    name: "presmit-app",
    technologies: "Front-end",
    image: Prestmit,
    
    url:"https://prestmit-f7qz89311-emmanuels-projects-2f7947b4.vercel.app"
  },
  {
    id: 3,
    name: "NicfredzLLc",
    technologies: "Front-end",
    image: Image2025,
   
    url:"https://nicfredz-hkc2jsuxy-emmanuels-projects-2f7947b4.vercel.app"
  },
  {
    id: 4,
    name: "olayinka.portdemo",
    technologies: "Front-end",
    image: Profilepics,
    url: "https://olayinka.portdemo.com/"
  },
  {
    id: 5,
    name: "Emmeax vault",
    technologies: "Front-end",
    image:Vault ,
    url: "https://emmeax-vault-3ajdnut91-emmanuels-projects-2f7947b4.vercel.app"
  },
];

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-52 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-sm text-gray-400">{project.technologies}</p>
                <div className="flex gap-4 mt-2">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm rounded-full hover:opacity-90 transition"
                  >
                    
                  </a> */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full hover:opacity-90 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
