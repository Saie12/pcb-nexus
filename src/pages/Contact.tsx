import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import { motion } from "framer-motion";

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Saiesh Sasane",
    "description": "Get in touch with Saiesh Sasane for PCB design projects, embedded systems development, hardware consulting, or job opportunities.",
    "mainEntity": {
      "@type": "Person",
      "name": "Saiesh Sasane",
      "email": "saieshsasane.hireme@gmail.com",
      "jobTitle": "PCB Design & Embedded Systems Engineer"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO
        title="Contact - Get in Touch for PCB Design & Embedded Systems Projects"
        description="Contact Saiesh Sasane for PCB design services, embedded systems development, firmware programming, hardware prototyping, or job opportunities. Available for freelance projects, consulting, and full-time positions in hardware engineering."
        keywords={[
          "contact PCB designer",
          "hire PCB design engineer",
          "embedded systems consultant",
          "hardware engineer contact",
          "PCB design services inquiry",
          "firmware development contact",
          "hardware prototyping inquiry",
          "freelance PCB designer",
          "contract hardware engineer",
          "PCB design quote",
          "embedded systems quote",
          "hardware consulting",
          "PCB design job inquiry",
          "hardware engineer hiring",
          "electronics engineer contact",
          "KiCad designer for hire",
          "ARM firmware developer",
          "circuit design services",
          "board layout services",
          "hardware project inquiry",
          "electronics project consultation",
          "PCB design collaboration",
          "embedded systems collaboration"
        ]}
        structuredData={structuredData}
      />
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-[#00ff88] via-[#00BFFF] to-[#ff0080] bg-clip-text text-transparent">Great Together</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Have a project idea or a job opportunity? I'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <ContactInfo />
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}