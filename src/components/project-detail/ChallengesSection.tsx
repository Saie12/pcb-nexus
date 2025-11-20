import { motion } from "framer-motion";

interface ChallengesSectionProps {
  challenges: string;
}

export default function ChallengesSection({ challenges }: ChallengesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <motion.span 
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ff0080]/10 border border-[#ff0080]/30 text-[#ff0080] text-xl"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,0,128,0.4)" }}
        >
          3
        </motion.span>
        Challenges & Solutions
      </h2>
      
      <div className="space-y-6">
        {challenges.split('\n\n').map((paragraph, idx) => {
          if (paragraph.includes('*') || paragraph.includes('•')) {
            const items = paragraph.split(/[*•]/).filter(item => item.trim());
            return (
              <motion.div 
                key={idx} 
                className="bg-[#111111] border border-[#ff0080]/10 rounded-xl p-6 hover:border-[#ff0080]/30 hover:shadow-[0_0_20px_rgba(255,0,128,0.1)] transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ul className="space-y-3">
                  {items.map((item, itemIdx) => (
                    <motion.li 
                      key={itemIdx} 
                      className="flex items-start gap-3 text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIdx * 0.05 }}
                    >
                      <span className="text-[#ff0080] mt-1">▸</span>
                      <span className="leading-relaxed">{item.trim()}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          }
          
          return (
            <motion.div 
              key={idx} 
              className="bg-[#111111] border border-[#ff0080]/10 rounded-xl p-6 hover:border-[#ff0080]/30 hover:shadow-[0_0_20px_rgba(255,0,128,0.1)] transition-all"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <p className="text-gray-400 leading-relaxed">{paragraph}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
