import { Github, Mail } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
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
              <a
                href="mailto:saieshsasane@gmail.com"
                className="w-10 h-10 bg-[#111111] border border-[#00ff88]/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#00ff88] hover:border-[#00ff88] hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#111111] border border-[#ff0080]/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ff0080] hover:border-[#ff0080] hover:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all"
              >
                <Github size={20} />
              </a>
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