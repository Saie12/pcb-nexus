import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Github, Code2, Star, GitFork, ExternalLink } from "lucide-react";

export default function SocialLinks() {
  return (
    <Card className="bg-[#111111] border-[#00ff88]/20 hover:border-[#00BFFF] hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">
          Connect With Me
        </h3>
        <div className="space-y-3">
          <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
              <motion.a
                href="https://github.com/Saie12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-[#ff0080] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 bg-[#ff0080]/10 border border-[#ff0080]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#ff0080]/20 group-hover:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all">
                  <Github size={20} className="text-[#ff0080]" />
                </div>
                <span className="text-sm">GitHub Profile</span>
              </motion.a>
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
      </CardContent>
    </Card>
  );
}
