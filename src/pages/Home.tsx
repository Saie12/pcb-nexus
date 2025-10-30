import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Shuffle from "@/components/Shuffle";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Zap, CheckCircle, Wrench, Download, GitBranch, Mail, Github, Send, Loader2 } from "lucide-react";
import { Link } from "react-router";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const allProjects = useQuery(api.projects.list);
  const submitContact = useMutation(api.contact.submit);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContact(formData);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    {
      icon: Cpu,
      title: "Schematic & PCB Layout",
      description:
        "From your initial concept, block diagram, or existing schematics, I create professional, manufacturable multi-layer PCB layouts in KiCad. I focus on clean design, DFM principles, and robust power delivery.",
      deliverables: [
        "Gerber & Drill Files",
        "Bill of Materials (BOM)",
        "Pick and Place (PnP) File",
        "3D Model",
        "KiCad Source Files",
      ],
      color: "#00ff88",
    },
    {
      icon: Zap,
      title: "High-Speed Design",
      description:
        "Specializing in layouts for high-speed digital interfaces. I design boards with controlled impedance traces, matched-length differential pairs (USB, Ethernet), and proper routing strategies to ensure signal integrity.",
      deliverables: [
        "Layout with High-Speed Constraints",
        "Stack-up Report",
        "Impedance Calculations",
      ],
      color: "#0088ff",
    },
    {
      icon: Code,
      title: "Firmware Development",
      description:
        "Writing clean, efficient, and well-documented firmware in C and C++ for microcontrollers like PIC, 8051, and ARM. I develop firmware for sensor integration, communication protocols, and peripheral control.",
      deliverables: [
        "Well-Commented Source Code (via Git)",
        "Compiled HEX/BIN File",
      ],
      color: "#ff0080",
    },
    {
      icon: Wrench,
      title: "Prototyping & Board Bring-up",
      description:
        "Providing hands-on services including SMD and THT component soldering, board assembly, and initial functional testing (bring-up) to verify hardware functionality.",
      deliverables: ["Assembled & Tested Prototype PCB"],
      color: "#00ff88",
    },
  ];

  const skills = [
    {
      category: "EDA Tools",
      items: ["KiCad (Schematic Capture, PCB Layout, 3D Rendering, Gerber Generation)"],
      icon: Cpu,
    },
    {
      category: "Design Concepts",
      items: [
        "High-Speed Design (Impedance Control, Differential Pairs, Length Matching)",
        "EMI/EMC",
        "DFM",
      ],
      icon: Zap,
    },
    {
      category: "Microcontrollers & IDEs",
      items: ["PIC", "8051", "ARM Cortex-M", "MPLAB X IDE", "Keil IDE"],
      icon: Cpu,
    },
    {
      category: "Programming",
      items: ["C", "C++", "Python (for scripting and automation)"],
      icon: Code,
    },
    {
      category: "Version Control & Collaboration",
      items: ["Git", "GitHub", "CadLab"],
      icon: GitBranch,
    },
    {
      category: "Simulation & Prototyping",
      items: ["SPICE", "Soldering (SMD/THT)", "Lab equipment"],
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated PCB Trace Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0,100 Q250,50 500,100 T1000,100"
              stroke="#00BFFF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M0,300 Q250,250 500,300 T1000,300"
              stroke="#00BFFF"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(0,255,136,0.4)",
                    "0 0 60px rgba(0,191,255,0.6)",
                    "0 0 40px rgba(0,255,136,0.4)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-20 h-20 bg-gradient-to-br from-[#00ff88] via-[#0088ff] to-[#ff0080] rounded-2xl flex items-center justify-center mx-auto"
              >
                <Cpu size={40} className="text-[#0a0a0a]" />
              </motion.div>
            </motion.div>

            <div className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              <Shuffle
                text="Expert PCB Design"
                className="text-5xl md:text-7xl font-bold text-white"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                tag="h1"
              />
              <br />
              <span className="text-[#00BFFF]/60">and </span>
              <Shuffle
                text="Hardware Prototyping"
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#00ff88] via-[#00BFFF] to-[#ff0080] bg-clip-text text-transparent"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                tag="span"
              />
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A detail-oriented electronics engineer specializing in high-speed
              board design, embedded firmware, and rapid prototyping using KiCad,
              C++, and Python.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-[#00BFFF] text-white hover:bg-[#00BFFF]/90 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] hover:-translate-y-1 font-semibold transition-all duration-300"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="#projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF]/10 hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:-translate-y-1 transition-all duration-300"
                >
                  View My Work
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Skills Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto"
          >
            {[
              { name: "KiCad", icon: Zap },
              { name: "C++", icon: Code },
              { name: "Python", icon: Code },
              { name: "Git", icon: Code },
              { name: "PIC", icon: Cpu },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-[#1a1a1a] border border-[#00ff88]/20 rounded-xl p-6 text-center hover:border-[#00BFFF] hover:shadow-[0_0_20px_rgba(0,191,255,0.2)] transition-all duration-300 group cursor-pointer"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-[#00ff88] group-hover:text-[#00BFFF] group-hover:scale-110 transition-all duration-300" />
                <p className="text-white font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-[#00ff88]">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I offer a range of hardware design and development services to help
              you build and test your electronic products efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#111111] border-[#00ff88]/20 hover:border-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all h-full">
                  <CardHeader>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${service.color}20`,
                        border: `1px solid ${service.color}40`,
                        boxShadow: `0 0 20px ${service.color}30`,
                      }}
                    >
                      <service.icon
                        size={28}
                        style={{ color: service.color }}
                      />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start text-gray-400"
                          >
                            <CheckCircle
                              size={18}
                              className="mr-2 mt-0.5 flex-shrink-0"
                              style={{ color: service.color }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#00ff88]">Me</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-[#0a0a0a] border-[#00ff88]/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Personal Bio
                  </h3>
                  <div className="space-y-4 text-gray-400">
                    <p>
                      I'm a passionate electronics engineer with a deep fascination
                      for turning innovative ideas into functional hardware. My
                      journey in PCB design began with a curiosity about how
                      electronic devices work, and it has evolved into a
                      professional expertise in creating high-quality, reliable
                      circuit boards.
                    </p>
                    <p>
                      With hands-on experience in KiCad, embedded systems
                      programming, and hardware prototyping, I specialize in
                      designing PCBs that meet stringent performance requirements
                      while maintaining manufacturability. From high-speed digital
                      interfaces to power management circuits, I approach each
                      project with meticulous attention to detail and a commitment
                      to excellence.
                    </p>
                    <p>
                      My career goal is to join an innovative team as a PCB Design
                      Engineer where I can contribute to challenging hardware
                      projects, collaborate with talented engineers, and continue
                      growing my expertise in cutting-edge electronic design.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-[#0a0a0a] border-[#00ff88]/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Core Competencies
                  </h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.category}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                            <skill.icon size={20} className="text-[#00ff88]" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-2">
                              {skill.category}
                            </h4>
                            <ul className="space-y-1">
                              {skill.items.map((item) => (
                                <li key={item} className="text-gray-400 text-sm">
                                  • {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className="w-full mt-8 bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00ff88]/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] font-semibold"
                    size="lg"
                  >
                    <Download className="mr-2" size={20} />
                    Download My Resume
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My <span className="text-[#00BFFF]">Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my PCB design work, embedded systems projects, and
              hardware prototypes demonstrating technical expertise.
            </p>
          </motion.div>

          {!allProjects ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#00ff88]" />
            </div>
          ) : allProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">No projects yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <ProjectCard
                    title={project.title}
                    summary={project.summary}
                    image={project.heroImage}
                    slug={project.slug}
                    technologies={project.technologies}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something{" "}
              <span className="text-[#00ff88]">Great Together</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project idea or a job opportunity? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="bg-[#0a0a0a] border-[#00ff88]/20">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-white font-medium mb-2 block">
                          Name
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-[#111111] border-[#00ff88]/20 text-white focus:border-[#00ff88]"
                        />
                      </div>
                      <div>
                        <label className="text-white font-medium mb-2 block">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-[#111111] border-[#00ff88]/20 text-white focus:border-[#00ff88]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-[#111111] border-[#00ff88]/20 text-white focus:border-[#00ff88]"
                      />
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={6}
                        className="bg-[#111111] border-[#00ff88]/20 text-white focus:border-[#00ff88]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00ff88] text-[#0a0a0a] hover:bg-[#00ff88]/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] font-semibold"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="bg-[#0a0a0a] border-[#00ff88]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:saieshsasane@gmail.com"
                      className="flex items-center text-gray-400 hover:text-[#00ff88] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#00ff88]/20 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all">
                        <Mail size={20} className="text-[#00ff88]" />
                      </div>
                      <span className="text-sm">saieshsasane@gmail.com</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#0a0a0a] border-[#00ff88]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Connect With Me
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-[#ff0080] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#ff0080]/10 border border-[#ff0080]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#ff0080]/20 group-hover:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all">
                        <Github size={20} className="text-[#ff0080]" />
                      </div>
                      <span className="text-sm">GitHub Profile</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}