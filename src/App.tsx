/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Layout, 
  Smartphone, 
  Zap, 
  Layers, 
  Award, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Send,
  Moon,
  Sun,
  Menu,
  X,
  ArrowUp,
  Monitor,
  Palette,
  Terminal,
  Server,
  Cloud,
  Briefcase,
  GraduationCap,
  Star,
  CheckCircle2
} from 'lucide-react';

const typingTexts = [
  "Web Developer",
  "UI/UX Designer",
  "Creative Coder",
  "Frontend Developer"
];

// --- Utility Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-accent font-display font-bold tracking-[0.2em] uppercase text-[10px] mb-3"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-4"
    >
      {children}
    </motion.h2>
  </div>
);

// --- Navbar ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-dark' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-white text-lg">J</div>
          <span className="text-xl font-bold tracking-tight text-white">JAWAD ALI<span className="text-accent">.</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-zinc-400 hover:text-white block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentText = typingTexts[textIndex];
    
    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => setDisplayText(currentText.slice(0, displayText.length + 1)), 100);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => setDisplayText(currentText.slice(0, displayText.length - 1)), 50);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="badge-premium mb-6 inline-block"
          >
            Available for projects
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-display font-extrabold mb-6 leading-[0.9] text-white"
          >
            Creative<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Developer.</span>
          </motion.h1>
          
          <div className="h-[40px] text-2xl font-display font-medium text-slate-400 mb-8 max-w-lg">
            {displayText}<span className="text-accent animate-pulse">|</span>
          </div>
          
          <p className="text-slate-400 text-lg mb-10 max-w-sm leading-relaxed">
            Building high-performance digital experiences where code meets aesthetic precision.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Chat
            </a>
          </div>
          
          <div className="flex gap-10 mt-12 pt-8 border-t border-white/5">
            <div>
              <span className="block text-2xl font-bold text-white">05+</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Years Experience</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">50+</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Projects Completed</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">12</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500">Industry Awards</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="w-[500px] h-[500px] relative mx-auto">
            {/* Shape decorations */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-zinc-800 rounded-full"
            />
            
            {/* Profile Image Wrap */}
            <div className="absolute inset-12 overflow-hidden rounded-2xl border-4 border-zinc-900/50 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/jawad-ali/600/600" 
                alt="Jawad Ali Profile" 
                className="w-full h-full object-cover grayscale active:grayscale-0 transition-all duration-500 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Float Floating Icons */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 right-0 p-4 glass rounded-2xl z-20"
            >
              <Code className="text-primary" size={32} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-0 p-4 glass rounded-2xl z-20"
            >
              <Palette className="text-secondary" size={32} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- About Section ---

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Professional Bio">About My Journey</SectionHeading>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-white">
              Passion-driven <span className="text-primary">developer</span> with an eye for <span className="text-secondary">craftsmanship</span>.
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I started my coding journey 5 years ago, and since then I've been obsessed with bringing bold ideas to life in the browser. 
              My expertise lies in building pixel-perfect digital experiences that don't just look great but perform flawlessly.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              I believe that great software is a blend of clean engineering, user-centric design, and cutting-edge technology. My goal is to build tools that solve problems while being a joy to use.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: "Experience", value: "5+ Years" },
                { label: "Projects", value: "50+ Completed" },
                { label: "Clients", value: "30+ Global" },
                { label: "Awards", value: "12 Winns" }
              ].map((stat, i) => (
                <div key={i} className="p-4 glass rounded-xl">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{stat.label}</p>
                  <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-6 glass rounded-3xl mt-8"
            >
              <Terminal className="text-primary mb-4" size={40} />
              <h4 className="text-xl font-bold mb-2">Coding</h4>
              <p className="text-sm text-zinc-500">Writing clean, maintainable code is my second language.</p>
            </motion.div>
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-6 glass rounded-3xl"
            >
              <Layout className="text-secondary mb-4" size={40} />
              <h4 className="text-xl font-bold mb-2">Design</h4>
              <p className="text-sm text-zinc-500">Visual aesthetics and UX are at the heart of my workflow.</p>
            </motion.div>
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-6 glass rounded-3xl"
            >
              <Zap className="text-accent mb-4" size={40} />
              <h4 className="text-xl font-bold mb-2">Speed</h4>
              <p className="text-sm text-zinc-500">I optimize every line of code for blazing-fast performance.</p>
            </motion.div>
            <motion.div 
               whileHover={{ y: -10 }}
               className="p-6 glass rounded-3xl -mt-8"
            >
              <Smartphone className="text-green-400 mb-4" size={40} />
              <h4 className="text-xl font-bold mb-2">Responsive</h4>
              <p className="text-sm text-zinc-500">Your site will look stunning on every screen size imaginable.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Skills Section ---

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Monitor className="text-primary" />,
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="text-secondary" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 88 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 90 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Design & Dev",
      icon: <Layers className="text-accent" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "UI/UX Design", level: 90 },
        { name: "Git / GitHub", level: 95 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Toolbox">My Expertise</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 glass rounded-3xl group transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 glass rounded-xl group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="text-2xl font-display font-bold">{cat.title}</h3>
              </div>
              
              <div className="space-y-6">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-300 font-medium">{skill.name}</span>
                      <span className="text-zinc-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (j * 0.1) }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Building scalable, robust, and lightning-fast web applications using modern technologies.",
      icon: <Terminal size={32} />
    },
    {
      title: "UI/UX Design",
      desc: "Creating intuitive and visually stunning user interfaces that prioritize user experience.",
      icon: <Palette size={32} />
    },
    {
      title: "Responsive Design",
      desc: "Ensuring your website looks incredible and works perfectly on all devices and platforms.",
      icon: <Smartphone size={32} />
    },
    {
      title: "Landing Pages",
      desc: "High-converting, goal-oriented single-page websites designed for marketing success.",
      icon: <Monitor size={32} />
    },
    {
      title: "Cloud Solutions",
      desc: "Deploying and managing web apps on cloud platforms like AWS, Vercel, and Firebase.",
      icon: <Cloud size={32} />
    },
    {
      title: "Performance Optimization",
      desc: "Making your existing web projects faster, more efficient, and SEO-friendly.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="What I Offer">My Services</SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 glass rounded-3xl group border-transparent hover:border-white/20 transition-all duration-300"
            >
              <div className="text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Projects Section ---

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Crypto Dashboard",
      category: "web",
      img: "https://picsum.photos/seed/crypto/600/400",
      desc: "A real-time cryptocurrency platform with advanced charts and data viz.",
      tags: ["React", "D3.js", "Tailwind"]
    },
    {
      id: 2,
      title: "Luxury Travel App",
      category: "mobile",
      img: "https://picsum.photos/seed/travel/600/400",
      desc: "Premium booking platform for exclusive resorts and global travel.",
      tags: ["React Native", "Firebase", "Framer"]
    },
    {
      id: 3,
      title: "Modern E-Commerce",
      category: "web",
      img: "https://picsum.photos/seed/shop/600/400",
      desc: "Ultra-fast headless commerce solution for high-fashion brands.",
      tags: ["Next.js", "Shopify", "Motion"]
    },
    {
      id: 4,
      title: "Al Agency Layout",
      category: "design",
      img: "https://picsum.photos/seed/ai/600/400",
      desc: "Creative website landing page for a cutting-edge artificial intelligence agency.",
      tags: ["Figma", "Design", "Landing"]
    },
    {
      id: 5,
      title: "Saas Platform",
      category: "web",
      img: "https://picsum.photos/seed/saas/600/400",
      desc: "Complete enterprise dashboard for data management and flow.",
      tags: ["Postgres", "Node.js", "Express"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      category: "mobile",
      img: "https://picsum.photos/seed/fitness/600/400",
      desc: "Interactive health monitoring app with gamification elements.",
      tags: ["TypeScript", "Native", "Graph"]
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Portfolio">Featured Projects</SectionHeading>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'web', 'mobile', 'design'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${filter === f ? 'bg-primary text-white' : 'bg-white/5 text-zinc-400 hover:bg-white/10'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group glass rounded-3xl overflow-hidden relative"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-4">
                      <a href="#" className="p-2 glass rounded-full hover:bg-primary transition-colors"><ExternalLink size={20} /></a>
                      <a href="#" className="p-2 glass rounded-full hover:bg-zinc-700 transition-colors"><Github size={20} /></a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-accent px-2 py-1 bg-white/5 border border-white/10 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-zinc-500 text-sm line-clamp-2">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// --- Experience/Timeline Section ---

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Full Stack Dev",
      company: "Innovate AI",
      desc: "Leading human-centric product development using scalable React architectures.",
      icon: <Briefcase />
    },
    {
      year: "2021 - 2023",
      role: "Frontend Specialist",
      company: "Pixel Perfect Agency",
      desc: "Built over 40+ high-traffic commercial websites with focus on UI/UX.",
      icon: <Layout />
    },
    {
      year: "2019 - 2021",
      role: "Junior Web Developer",
      company: "StartUp Lab",
      desc: "Gained core experience in modern JS ecosystems and cloud deployments.",
      icon: <Terminal />
    },
    {
      year: "2015 - 2018",
      role: "Computer Science",
      company: "Tech University",
      desc: "Graduated with honors, focusing on algorithm design and system arch.",
      icon: <GraduationCap />
    }
  ];

  return (
    <section id="experience" className="py-24 bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="My Story">Experience Timeline</SectionHeading>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800" />
          
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node */}
                <div className="absolute left-[-15px] md:left-1/2 md:translate-x-[-50%] p-2 glass rounded-full z-10 bg-[#050508]">
                  <div className="w-6 h-6 bg-accent rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                </div>
                
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="p-8 glass rounded-3xl group hover:border-white/20 transition-all duration-300">
                    <div className="flex gap-3 mb-2">
                       <div className="w-[2px] h-10 bg-gradient-to-b from-accent to-transparent"></div>
                       <div>
                          <div className="text-white text-lg font-bold">{exp.role}</div>
                          <div className="text-slate-500 text-[11px] uppercase tracking-widest font-semibold">{exp.company} • {exp.year}</div>
                       </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mt-4">{exp.desc}</p>
                  </div>
                </div>
                {/* Visual filler for layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Testimonials Section ---

const Testimonials = () => {
  const [active, setActive] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStream",
      text: "Jawad is a visionary developer. He didn't just build our app; he redesigned our entire digital identity with unmatched speed and precision.",
      img: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Marcus Chen",
      role: "Product Manager",
      text: "Working with Jawad was the smoothest engineering collaboration I've ever had. His code is as beautiful as his designs.",
      img: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      name: "Elena Rodriguez",
      role: "Design Lead",
      text: "Exceptionally talented and professional. He takes complex UI concepts and transforms them into interactive masterpieces.",
      img: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Reviews">Client Testimonials</SectionHeading>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 glass rounded-3xl text-center">
            <MessageSquare className="text-primary/20 absolute top-8 left-8" size={80} />
            <div className="flex justify-center mb-8">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={20} className="fill-yellow-500 text-yellow-500" />)}
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <p className="text-xl md:text-2xl text-zinc-300 italic leading-relaxed">
                  "{testimonials[active].text}"
                </p>
                <div className="flex items-center justify-center gap-4 pt-6">
                  <img 
                    src={testimonials[active].img} 
                    className="w-16 h-16 rounded-full border-2 border-primary" 
                    alt={testimonials[active].name}
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-lg">{testimonials[active].name}</h4>
                    <p className="text-zinc-500 text-sm">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Nav Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-primary' : 'w-2 bg-zinc-700'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact Section ---

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Get In Touch">Contact Me</SectionHeading>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-display font-bold mb-6">Let's build something <span className="gradient-text">exceptional</span> together.</h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open. 
              Whether you have a question or want to discuss a new project, I'll get back to you!
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail />, label: "Email Me", val: "jawad@developer.com" },
                { icon: <Phone />, label: "Call Me", val: "+1 234 567 890" },
                { icon: <MapPin />, label: "Location", val: "New York, Global" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-6 glass rounded-2xl group hover:border-primary/30 transition-all">
                  <div className="p-3 glass rounded-xl text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{item.label}</div>
                    <div className="text-lg font-bold text-white">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass p-10 rounded-3xl">
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="inline-flex p-4 glass rounded-full text-green-400 mb-6">
                  <CheckCircle2 size={60} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-zinc-400">Thanks for reaching out. I'll get back to you shortly.</p>
                <button onClick={() => setFormStatus('idle')} className="mt-8 text-primary font-bold hover:underline">Send another one</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">FullName</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Subject</label>
                  <input type="text" required placeholder="Project Discussion" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea rows={5} required placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full btn-premium bg-gradient-to-r from-primary to-secondary text-white py-4 shadow-xl shadow-primary/20 disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050508]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
             <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-white text-lg">J</div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">Jawad Ali<span className="text-accent">.</span></span>
            </div>
            <p className="text-slate-500 max-w-xs text-sm">
              Creating digital excellence with high-performance stacks and creative precision.
            </p>
          </div>
          
          <div className="flex gap-8">
            {['Work', 'About', 'Services', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white transition-colors">{l}</a>
            ))}
          </div>

          <div className="flex gap-4">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="p-3 glass rounded-full hover:bg-primary/20 transition-all text-slate-400 hover:text-white">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="flex items-center gap-6 text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>Server Online</span>
            </div>
            <span>V1.4.0 Static</span>
          </div>
          <div className="text-slate-600 text-[10px] tracking-[0.2em] uppercase font-bold">
            © {new Date().getFullYear()} Jawad Ali — All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 1000);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#050508]">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-accent origin-left z-[60]" 
        style={{ scaleX }}
      />
      
      {/* Custom Cursor Overlay - simplified for performance */}
      <div className="hidden lg:block">
        <div className="custom-cursor" id="cursor" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating social sidebar */}
      <aside className="fixed left-6 bottom-0 z-40 hidden xl:flex flex-col items-center gap-6 after:w-px after:h-24 after:bg-zinc-800 after:mt-4">
        {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
          <a key={i} href="#" className="text-zinc-500 hover:text-primary transition-all duration-300 hover:-translate-y-1">
            <Icon size={20} />
          </a>
        ))}
      </aside>

      {/* Back to top bullet */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed right-10 bottom-10 p-4 glass rounded-full text-primary z-50 hover:bg-primary/10 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <script dangerouslySetInnerHTML={{ __html: `
        // Simple smoothing for the cursor circle
        const cursor = document.getElementById('cursor');
        if(cursor) {
          document.addEventListener('mousemove', (e) => {
            cursor.style.transform = \`translate3d(\${e.clientX - 10}px, \${e.clientY - 10}px, 0)\`;
          });
        }
      `}} />
    </div>
  );
}
