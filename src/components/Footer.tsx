import { Github, Mail, Copy, ExternalLink, Code2, Star, GitFork } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [showEmailMenu, setShowEmailMenu] = useState(false);
  const emailMenuRef = useRef<HTMLDivElement>(null);
  const emailAddress = "saieshsasane.hireme@gmail.com";

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emailMenuRef.current && !emailMenuRef.current.contains(event.target as Node)) {
        setShowEmailMenu(false);
      }
    };

    if (showEmailMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmailMenu]);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailMenu(!showEmailMenu);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    toast.success("Email address copied to clipboard!");
    setShowEmailMenu(false);
  };

  const handleOpenGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`, "_blank");
    setShowEmailMenu(false);
  };

  const handleOpenOutlook = () => {
    window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}`, "_blank");
    setShowEmailMenu(false);
  };

  const handleOpenDefault = () => {
    window.location.href = `mailto:${emailAddress}`;
    setShowEmailMenu(false);
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#00ff88]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Saiesh Sasane</h3>
            <p className="text-gray-400">
              PCB Design & Embedded Systems Engineer specializing in high-speed
              design and hardware prototyping.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <div className="relative" ref={emailMenuRef}>
                <button
                  onClick={handleEmailClick}
                  className="w-10 h-10 bg-[#111111] border border-[#00ff88]/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00ff88] hover:border-[#00ff88] hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all"
                >
                  <Mail size={20} />
                </button>

                <AnimatePresence>
                  {showEmailMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-0 mb-2 bg-[#1a1a1a] border border-[#00ff88]/30 rounded-lg shadow-[0_0_20px_rgba(0,255,136,0.2)] overflow-hidden z-10 min-w-[220px]"
                    >
                      <button
                        onClick={handleCopyEmail}
                        className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00ff88]/10 hover:text-[#00ff88] transition-colors flex items-center gap-2"
                      >
                        <Copy size={16} />
                        Copy Email Address
                      </button>
                      <button
                        onClick={handleOpenGmail}
                        className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00ff88]/10 hover:text-[#00ff88] transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Open in Gmail
                      </button>
                      <button
                        onClick={handleOpenOutlook}
                        className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00ff88]/10 hover:text-[#00ff88] transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Open in Outlook
                      </button>
                      <button
                        onClick={handleOpenDefault}
                        className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00ff88]/10 hover:text-[#00ff88] transition-colors flex items-center gap-2"
                      >
                        <Mail size={16} />
                        Use Default Email Client
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <a
                    href="https://github.com/Saie12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#111111] border border-[#ff0080]/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ff0080] hover:border-[#ff0080] hover:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all"
                  >
                    <Github size={20} />
                  </a>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 bg-[#1a1a1a] border-[#ff0080]/30 cursor-pointer hover:bg-[#1a1a1a]/90 transition-colors"
                  onClick={() => window.open("https://github.com/Saie12", "_blank")}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#ff0080]/10 border border-[#ff0080]/20 rounded-lg flex items-center justify-center">
                        <Github size={24} className="text-[#ff0080]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">@Saie12</h4>
                        <p className="text-xs text-gray-400">PCB Design & Embedded Systems</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 space-y-2">
                      <p className="flex items-center gap-2">
                        <Code2 size={14} className="text-[#ff0080]" />
                        Hardware Projects & Firmware
                      </p>
                      <p className="flex items-center gap-2">
                        <Star size={14} className="text-[#ff0080]" />
                        KiCad Designs & Schematics
                      </p>
                      <p className="flex items-center gap-2">
                        <GitFork size={14} className="text-[#ff0080]" />
                        Open Source Contributions
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#ff0080]/20">
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <ExternalLink size={12} />
                        Click to visit GitHub profile
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#00ff88]/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saiesh Sasane. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}