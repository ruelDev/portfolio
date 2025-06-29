import React, { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe, 
  ExternalLink, 
  Calendar,
  ChevronRight,
  Star,
  Menu,
  X,
  Facebook
} from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Bootstrap", "Blade", "Inertia.js"]
  },
  {
    category: "Backend", 
    items: ["Laravel", "MySql", "Node.js"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "CI/CD"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "REST APIs", "Figma"]
  }
];

const experiences = [
  {
    id: 1,
    title: "Mid Full-Stack Developer",
    company: "National Center for Mental Health",
    period: "2023 - Present",
    description: "Led development of scalable web application Integrated System of Allied Services (ISAS). Improved application performance by 40% through optimization strategies.",
    technologies: ["React", "Laravel", "REST Apis", "MySql", "Docker", "TypeScript", "Git"]
  },
  {
    id: 2,
    title: "Mid Full-Stack Developer",
    company: "National Center for Mental Health",
    period: "2023 - Present",
    description: "Led development of scalable web application Integrated System of Allied Services (ISAS). Improved application performance by 40% through optimization strategies.",
    technologies: ["React", "Laravel", "REST Apis", "MySql", "Docker", "TypeScript", "Git"]
  },
  {
    id: 3,
    title: "Mid Full-Stack Developer",
    company: "National Center for Mental Health",
    period: "2023 - Present",
    description: "Led development of scalable web application Integrated System of Allied Services (ISAS). Improved application performance by 40% through optimization strategies.",
    technologies: ["React", "Laravel", "REST Apis", "MySql", "Docker", "TypeScript", "Git"]
  },
];

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description: "Full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard. Built with microservices architecture for scalability.",
//     technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS"],
//     liveUrl: "#",
//     githubUrl: "#",
//     featured: true
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description: "Collaborative project management tool with real-time updates, file sharing, and team communication features.",
//     technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "JWT"],
//     liveUrl: "#",
//     githubUrl: "#",
//     featured: false
//   },
//   {
//     id: 3,
//     title: "Analytics Dashboard",
//     description: "Data visualization dashboard for business metrics with interactive charts and real-time data processing.",
//     technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
//     liveUrl: "#",
//     githubUrl: "#",
//     featured: false
//   },
//   {
//     id: 4,
//     title: "Social Media API",
//     description: "RESTful API for social media platform with authentication, post management, and real-time notifications.",
//     technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
//     liveUrl: "#",
//     githubUrl: "#",
//     featured: false
//   }
// ];


function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/projects");
      const projects = await res.json();
      setProjects(projects.data);
    })();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">


      <div className="hidden lg:block">
        <div className="fixed left-0 top-0 h-full w-120 bg-gray-900/95 backdrop-blur-sm border-l border-gray-700 z-10">
          <div className="flex flex-col h-full p-8">
            <div className="mt-10">
              <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <h1 className="text-5xl font-bold mb-2">Ruel Lobo</h1>
                <p className="text-2xl text-indigo-400 mb-4">Full-Stack Developer</p>
              </div>

              <nav className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <ul className="space-y-2">
                  {[
                    { id: 'about', label: 'About', icon: User },
                    { id: 'experience', label: 'Experience', icon: Briefcase },
                    { id: 'projects', label: 'Projects', icon: Code }
                  ].map(({ id, label, icon: Icon }) => (
                    <li key={id}>
                      <button
                        onClick={() => scrollToSection(id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          activeSection === id 
                            ? 'bg-indigo-600 text-white' 
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{label}</span>
                        {activeSection === id && <ChevronRight size={16} className="ml-auto" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className={`mt-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="space-y-3 text-sm">
                <a href="mailto:ruellobo.04@gmail.com" className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} />
                  <span>ruellobo.04@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/ruel-lobo-66859b216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center space-x-3 text-gray-300">
                  <Linkedin size={16} />
                  <span>in/ruel-lobo</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577633483021&viewas=100000686899395" className="flex items-center space-x-3 text-gray-300">
                  <Facebook size={16} />
                  <span>fb.com/ruel.lobo</span>
                </a>
                <a href="https://github.com/ruelDev" className="flex items-center space-x-3 text-gray-300">
                  <Github size={16} />
                  <span>@ruelDev</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pl-120">
          <div className="max-w-4xl mx-auto px-8 py-16">
            <section id="about" className="mb-20">
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm a passionate full-stack developer with over 2 years of experience building scalable web applications. 
                    I specialize in modern JavaScript and PHP frameworks, and creating exceptional user experiences.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    My expertise spans from frontend development with React and Blade to backend systems using Node.js and Laravel. 
                    I'm passionate about clean code, system architecture, and staying up-to-date with the latest technologies.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skillGroup, index) => (
                      <div key={skillGroup.category} className={`transition-all duration-500 delay-${(index + 1) * 100}`}>
                        <h4 className="text-indigo-400 font-semibold mb-3">{skillGroup.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="experience" className="mb-20">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 opacity-0 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="mb-20">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={project._id}
                    className={`bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 group opacity-0 animate-fade-in-up ${
                      project.featured ? 'md:col-span-2' : ''
                    }`}
                    style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {project.name}
                      </h3>
                      {project.featured && (
                        <div className="flex items-center text-yellow-400">
                          <Star size={16} fill="currentColor" />
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="inline-flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;