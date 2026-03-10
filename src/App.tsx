import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Database, Layout, Terminal, Briefcase, User, MessageSquare, BookOpen, ChevronRight, Trophy, Award, Star } from 'lucide-react';
import profileImage from './assets/profile.jpg';

// --- Types ---
interface NavItem {
  name: string;
  href: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

interface Certification {
  title: string;
  issuer: string;
}

// --- Data ---
const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const skills: Skill[] = [
  { name: 'HTML/CSS', icon: <Layout className="w-6 h-6" />, category: 'Frontend' },
  { name: 'JavaScript', icon: <Terminal className="w-6 h-6" />, category: 'Frontend' },
  { name: 'React', icon: <Cpu className="w-6 h-6" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <Code2 className="w-6 h-6" />, category: 'Frontend' },
  { name: 'Node.js', icon: <Terminal className="w-6 h-6" />, category: 'Backend' },
  { name: 'Python', icon: <Terminal className="w-6 h-6" />, category: 'Backend' },
  { name: 'Java', icon: <Code2 className="w-6 h-6" />, category: 'Backend' },
  { name: 'C/C++', icon: <Code2 className="w-6 h-6" />, category: 'Backend' },
  { name: 'Flask', icon: <Cpu className="w-6 h-6" />, category: 'Backend' },
  { name: 'FastAPI', icon: <Terminal className="w-6 h-6" />, category: 'Backend' },
  { name: 'SQL', icon: <Database className="w-6 h-6" />, category: 'Database' },
  { name: 'Git', icon: <Github className="w-6 h-6" />, category: 'Tools' },
  { name: 'Docker', icon: <Database className="w-6 h-6" />, category: 'Tools' },
  { name: 'Pandas', icon: <Code2 className="w-6 h-6" />, category: 'Tools' },
  { name: 'NumPy', icon: <Terminal className="w-6 h-6" />, category: 'Tools' },
];

const projects: Project[] = [
  {
    title: 'InterviewIQ',
    description: 'An AI mock interview platform simulating role-specific scenarios with customizable interviewer personalities. Generates context-aware questions and evaluates real-time responses using Google Gemini AI.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind', 'Firebase', 'Gemini API'],
    github: 'https://github.com/Aaayush2',
    demo: '#',
  },
  {
    title: 'Datapulse',
    description: 'Interactive analytics dashboard with multiple chart types, animated KPI cards, and CSV upload/export. Features real-time filtering, custom CSS animations, and optimized rendering.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tags: ['JavaScript', 'React', 'CSS', 'Recharts'],
    github: 'https://github.com/Aaayush2',
    demo: '#',
  }
];

const education: Education[] = [
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Indira Gandhi National Open University, Lucknow',
    period: 'July 2022 - December 2025 (Result Awaited)',
    description: 'Pursuing comprehensive studies in computer applications, programming languages, and software development.',
  },
  {
    degree: 'Intermediate (70%)',
    institution: 'PN Saigal Inter College, Sitapur',
    period: 'July 2021',
    description: 'Completed Higher Secondary Education.',
  },
];

const certifications: Certification[] = [
  { title: 'Prompt Engineering for ChatGPT', issuer: 'Great Learning Academy' },
  { title: 'Introduction to Artificial Intelligence', issuer: 'IBM SkillsBuild' },
  { title: 'Java Programming', issuer: 'Simplilearn SkillUp' },
  { title: 'Python for Data Science', issuer: 'Great Learning Academy' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-accent-teal"
        >
          Ayush<span className="text-white">portfolio</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-secondary hover:text-accent-teal transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-accent-teal text-accent-teal text-sm font-semibold hover:bg-accent-teal hover:text-bg-dark transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg text-text-secondary hover:text-accent-teal"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-accent-teal text-bg-dark text-center font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const titleWords = "From Code to Deployments,".split(" ");
  const titleGradient = "I Build Modern Web Experiences".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></span>
            <span>Available for projects</span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold leading-tight mb-6 overflow-hidden">
            <div className="flex flex-wrap">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap">
              {titleGradient.map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
                  }}
                  className="text-gradient inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }
            }}
            className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed"
          >
            Aspiring software developer dedicated to building exceptional digital experiences that are fast, accessible, and visually stunning.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1 } }
            }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-4 rounded-xl bg-accent-teal text-bg-dark font-bold hover:shadow-[0_0_20px_rgba(0,224,198,0.4)] transition-all">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl border border-white/20 hover:border-accent-teal/50 hover:text-accent-teal transition-all flex items-center gap-2">
              Contact Me <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center order-first md:order-last"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-teal/30 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-accent-blue/20"></div>
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-bg-card">
              <img
                src={profileImage}
                alt="Developer Avatar"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 glass p-3 rounded-2xl flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">Clean Code</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass p-3 rounded-2xl flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold">Modern Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2 max-w-sm w-full">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
                alt="Workspace"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Passionate About Building <br />
              <span className="text-accent-teal">Innovative Digital Solutions</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              I am a dedicated software engineer with a strong foundation in modern web development and backend systems. I specialize in building responsive, high-performance applications using React, Python, and robust database architectures. I thrive on solving complex problems and crafting seamless user experiences.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: 'Frontend Development', icon: <Layout className="w-5 h-5" /> },
                { label: 'Backend Architecture', icon: <Terminal className="w-5 h-5" /> },
                { label: 'AI Integrations', icon: <Cpu className="w-5 h-5" /> },
                { label: 'Data Analytics', icon: <Database className="w-5 h-5" /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm font-medium">
                  <div className="text-accent-teal">{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-accent-teal font-bold hover:gap-4 transition-all">
              Learn more about my process <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;

  return (
    <section id="skills" className="py-24 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Expertise</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <h3 className="text-lg font-display font-bold text-accent-teal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-teal"></span>
                {cat}
              </h3>
              <div className="grid gap-4">
                {skills.filter(s => s.category === cat).map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="glass p-4 rounded-2xl flex items-center gap-4 glow-border group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary group-hover:text-accent-teal transition-colors">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A selection of my recent work, showcasing my skills in full-stack development.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-3xl overflow-hidden glow-border group"
          >
            <div className="aspect-video overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-accent-teal hover:text-bg-dark transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-accent-teal hover:text-bg-dark transition-all">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">{project.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Certifications</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Professional certifications I have obtained to enhance my skills.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl glow-border flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold mb-2">{cert.title}</h3>
              <p className="text-accent-teal text-sm font-bold">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-bg-card/30">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          My academic background and learning journey.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl glow-border flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <div className="text-accent-teal text-sm font-bold mb-1">{edu.period}</div>
                <h3 className="text-xl font-display font-bold mb-1">{edu.degree}</h3>
                <div className="text-text-secondary font-medium mb-3">{edu.institution}</div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Failed to connect to the server.');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-teal/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Build Something <br />
              <span className="text-gradient">Extraordinary Together</span>
            </h2>
            <p className="text-text-secondary mb-10 text-lg">
              Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-teal">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-widest font-bold">Email</div>
                  <div className="font-medium">ayushsri2812@gmail.com<br />+91 8115566897</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-teal">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-widest font-bold">LinkedIn</div>
                  <div className="font-medium">linkedin.com/in/ayushsri</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-teal">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary uppercase tracking-widest font-bold">GitHub</div>
                  <div className="font-medium">github.com/Aaayush2</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-10 rounded-3xl md:rounded-[40px] glow-border"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-teal transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-text-secondary uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-teal transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-text-secondary uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-teal transition-all resize-none"
                ></textarea>
              </div>
              <button
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-accent-teal text-bg-dark font-bold hover:shadow-[0_0_20px_rgba(0,224,198,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'} <ChevronRight className="w-5 h-5" />
              </button>

              {status === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent-teal text-sm text-center font-bold">
                  Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm text-center font-bold">
                  {errorMessage}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold text-accent-teal">
          Ayush<span className="text-white">portfolio</span>
        </div>
        <div className="text-text-secondary text-sm">
          © {new Date().getFullYear()} All rights reserved. Built with React & Tailwind.
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Aaayush2" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-teal transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/ayushsri" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-teal transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:ayushsri2812@gmail.com" className="text-text-secondary hover:text-accent-teal transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
