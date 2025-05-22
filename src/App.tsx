import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
} from "lucide-react";
import "./App.css";

function App() {
  const skills = {
    programming: [
      "C (Intermediate)",
      "Python (Intermediate)",
      "JavaScript (Intermediate)",
    ],
    webDev: ["HTML", "CSS", "React", "Django", "Tailwind CSS"],
    tools: ["Git", "Docker", "SQL", "Linux", "SQLite", "SQL Server"],
  };

  const projects = [
    {
      title: "Surgery Tools Tracking System",
      description:
        "Web application to track surgical tool usage in hospital settings. Improved performance by 15% through database optimization.",
      technologies: ["React", "SQL Server", "Database Optimization"],
      highlights: [
        "Intuitive UI design",
        "Reporting features",
        "Database normalization",
      ],
    },
    {
      title: "Personal Website",
      description:
        "Personal blog website showcasing writing and development skills.",
      technologies: ["Django", "Tailwind CSS", "SQLite"],
      highlights: [
        "Blog functionality",
        "Modern styling",
        "Content management",
      ],
      link: "#",
    },
    {
      title: "Pomodoro Timer",
      description:
        "Time management application designed to help users manage study and break intervals.",
      technologies: ["C Programming"],
      highlights: [
        "Time management focus",
        "Positive community feedback",
        "Social media engagement",
      ],
      link: "#",
    },
  ];

  const achievements = [
    "GPA: 3.43 - Bachelor of Computer Science Engineering",
    "Rapidly mastered CAD under tight deadlines for 5+ construction projects",
    "Effective cross-team collaboration resolving design conflicts",
    "Database Foundations Certificate (May 2024)",
    "Strong academic performance in Mobile Programming (A), Web Programming (A), Software Engineering (A)",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#fbf1c7] dark:bg-[#282828] text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center"></nav>
      </div>

      {/* Hero Section */}
      <motion.section
        className="container mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="">
          <motion.h2 className="text-5xl md:text-7xl font-bold mb-4">
            <motion.p
              className="text-3xl font-bold text-[#b8bb26]"
              whileHover={{ scale: 1.05 }}
            >
              Syeddinul Faiz Caniggia
            </motion.p>
          </motion.h2>
          <hr className="border-t-4 border-dashed border-gray-300 my-4" />
          <motion.p className="text-xl md:text-2xl mb-8">
            Back-end Developer stealing Front-end skills
          </motion.p>
          <motion.p
            className="text-lg  mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full-stack developer with hands-on experience in React and Django,
            passionate about optimizing systems and delivering real-world
            solutions.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="mailto:Faiz.C4n@gmail.com"
              className="flex items-center space-x-2-4 py-2 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={20} />
              <span>Email</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/syeddinul-faiz-c4n"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg  "
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/RhapsodyInBlueMelody"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2  px-4 py-2 rounded-lg  "
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Github size={20} />
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-gray-400"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center space-x-2"
              variants={itemVariants}
            >
              <MapPin size={16} />
              <span>Bekasi, West Java, Indonesia</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className=" py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h3
            className="text-4xl font-bold text-center mb-12 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className=" rounded-lg p-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Code className="text-yellow-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Programming Languages</h4>
              </div>
              <ul className="space-y-2">
                {skills.programming.map((skill, index) => (
                  <li key={index} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className=" rounded-lg p-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Globe className="text-yellow-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Web Development</h4>
              </div>
              <ul className="space-y-2">
                {skills.webDev.map((skill, index) => (
                  <li key={index} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className=" rounded-lg p-6"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Database className="text-yellow-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Tools & Technologies</h4>
              </div>
              <ul className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <li key={index} className="text-gray-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h3
            className="text-4xl font-bold text-center mb-12 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className=" rounded-lg p-6 hover:bg-[#504945] transition-colors"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-yellow-400">
                    {project.title}
                  </h4>
                  {project.link && (
                    <ExternalLink
                      className="text-gray-400 cursor-pointer hover:text-white"
                      size={20}
                    />
                  )}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-yellow-400 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-gray-400 mb-2">
                    Key Features:
                  </h5>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Education & Achievements */}
      <motion.section
        className=" py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h3
            className="text-4xl font-bold text-center mb-12 text-yellow-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Education & Achievements
          </motion.h3>

          <div className="max-w-4xl mx-auto">
            <motion.div
              className=" rounded-lg p-8 mb-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-semibold text-yellow-400 mb-2">
                Bachelor of Computer Science Engineering
              </h4>
              <p className="text-lg text-gray-300 mb-2">
                Pelita Bangsa University, Cikarang, Bekasi, Indonesia
              </p>
              <p className="text-gray-400 mb-4">
                Expected Graduation: December 2027 | GPA: 3.43
              </p>
              <p className="text-gray-300">
                Focusing on software engineering with hands-on experience in
                full-stack development, system optimization, and
                cross-functional team collaboration.
              </p>
            </motion.div>

            <motion.div
              className=" rounded-lg p-8"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Award className="text-yellow-400 mr-3" size={24} />
                <h4 className="text-2xl font-semibold">Key Achievements</h4>
              </div>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="text-gray-300 flex items-start"
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-yellow-400 mr-3">•</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h4
            className="text-2xl font-bold mb-4 text-yellow-400"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Let's Build Something Amazing Together
          </motion.h4>
          <motion.p
            className="text-gray-400 mb-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities and innovative
            projects.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:Faiz.C4n@gmail.com"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/syeddinul-faiz-c4n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/RhapsodyInBlueMelody"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
            >
              <Github size={24} />
            </motion.a>
          </motion.div>
          <motion.p
            className="text-gray-600 mt-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            © 2025 Syeddinul Faiz Caniggia. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
