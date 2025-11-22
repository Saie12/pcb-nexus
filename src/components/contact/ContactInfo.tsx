import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function ContactInfo() {
  const [showEmailMenu, setShowEmailMenu] = useState(false);
  const emailMenuRef = useRef<HTMLDivElement>(null);
  const emailAddress = "saieshsasane.hireme@gmail.com";

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
    <Card className="bg-[#111111] border-[#00ff88]/20 hover:border-[#00BFFF] hover:shadow-[0_0_30px_rgba(0,191,255,0.2)] transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="relative" ref={emailMenuRef}>
            <motion.button
              onClick={handleEmailClick}
              className="flex items-center text-gray-400 hover:text-[#00BFFF] transition-colors group w-full"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 bg-[#00BFFF]/10 border border-[#00BFFF]/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-[#00BFFF]/20 group-hover:shadow-[0_0_15px_rgba(0,191,255,0.3)] transition-all">
                <Mail size={20} className="text-[#00BFFF]" />
              </div>
              <span className="text-sm break-all">{emailAddress}</span>
            </motion.button>

            <AnimatePresence>
              {showEmailMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-[#00BFFF]/30 rounded-lg shadow-[0_0_20px_rgba(0,191,255,0.2)] overflow-hidden z-10"
                >
                  <button
                    onClick={handleCopyEmail}
                    className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF] transition-colors flex items-center gap-2"
                  >
                    <Copy size={16} />
                    Copy Email Address
                  </button>
                  <button
                    onClick={handleOpenGmail}
                    className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Open in Gmail
                  </button>
                  <button
                    onClick={handleOpenOutlook}
                    className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Open in Outlook
                  </button>
                  <button
                    onClick={handleOpenDefault}
                    className="w-full px-4 py-3 text-left text-sm text-gray-300 hover:bg-[#00BFFF]/10 hover:text-[#00BFFF] transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} />
                    Use Default Email Client
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
