import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import { Download, Code, Cpu, Zap, GitBranch, ExternalLink, FileText } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function CoreCompetencies() {
  const logDownload = useMutation(api.resumeTracking.logDownload);

  const handleResumeDownload = async () => {
    try {
      // Open the PDF in a new tab FIRST (before async operations) to avoid popup blockers
      const newWindow = window.open("/assets/Saiesh_Sasane_Embedded_Hardware_Engineer_Resume.pdf", "_blank");
      
      // Check if popup was blocked
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        toast.error("Popup blocked! Please allow popups for this site and try again.");
        return;
      }

      // Log download to Convex (after opening to avoid blocking)
      await logDownload({
        source: "portfolio",
        userAgent: navigator.userAgent,
        referrer: document.referrer || undefined,
      });

      // Track with Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "resume_download", {
          event_category: "engagement",
          event_label: "Resume Download from About Page",
        });
      }

      // Show success message after a brief delay to confirm the tab opened
      setTimeout(() => {
        toast.success("Resume opened in new tab. You can download it from there!");
      }, 100);
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Failed to open resume. Please try again.");
    }
  };

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
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <Card className="bg-[#111111] border-[#00ff88]/20 h-full hover:border-[#00BFFF] hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] transition-all duration-300">
        <CardContent className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Core Competencies
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="transition-all"
              >
                <div className="flex items-start">
                  <motion.div 
                    className="w-10 h-10 bg-[#00ff88]/10 border border-[#00ff88]/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(0, 255, 136, 0.2)",
                      boxShadow: "0 0 20px rgba(0, 255, 136, 0.3)"
                    }}
                  >
                    <skill.icon size={20} className="text-[#00ff88]" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {skill.category}
                    </h3>
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

          <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={handleResumeDownload}
                  className="w-full mt-8 bg-[#00BFFF] text-white hover:bg-[#00BFFF]/90 shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] font-semibold transition-all duration-300"
                  size="lg"
                >
                  <Download className="mr-2" size={20} />
                  Download My Resume
                </Button>
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent 
              className="w-80 bg-[#1a1a1a] border-[#00BFFF]/30 cursor-pointer hover:bg-[#1a1a1a]/90 transition-colors"
              onClick={handleResumeDownload}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00BFFF]/10 border border-[#00BFFF]/20 rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Resume Preview</h4>
                    <p className="text-xs text-gray-400">PDF Document • 50KB</p>
                  </div>
                </div>
                <div className="text-sm text-gray-300 space-y-1">
                  <p className="flex items-center gap-2">
                    <span className="text-[#00ff88]">✓</span> Professional Experience
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00ff88]">✓</span> Technical Skills
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00ff88]">✓</span> Project Portfolio
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-[#00ff88]">✓</span> Education & Certifications
                  </p>
                </div>
                <div className="pt-2 border-t border-[#00BFFF]/20">
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <ExternalLink size={12} />
                    Click to open in new tab
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardContent>
      </Card>
    </motion.div>
  );
}
