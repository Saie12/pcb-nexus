import { motion } from "framer-motion";

interface LayoutSectionProps {
  layoutStrategy: string;
  pcbLayoutImages?: string[];
  view3dImages?: string[];
}

export default function LayoutSection({ layoutStrategy, pcbLayoutImages, view3dImages }: LayoutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <motion.span 
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0088ff]/10 border border-[#0088ff]/30 text-[#0088ff] text-xl"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,136,255,0.4)" }}
        >
          2
        </motion.span>
        PCB Layout Strategy
      </h2>
      
      <div className="space-y-6 mb-6">
        {layoutStrategy.split('\n\n').map((paragraph, idx) => {
          if (paragraph.includes('*') || paragraph.includes('•')) {
            const items = paragraph.split(/[*•]/).filter(item => item.trim());
            return (
              <motion.div 
                key={idx} 
                className="bg-[#111111] border border-[#0088ff]/10 rounded-xl p-6 hover:border-[#0088ff]/30 hover:shadow-[0_0_20px_rgba(0,136,255,0.1)] transition-all"
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
                      <span className="text-[#0088ff] mt-1">▸</span>
                      <span className="leading-relaxed">{item.trim()}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          }
          
          return (
            <motion.p 
              key={idx} 
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {paragraph}
            </motion.p>
          );
        })}
      </div>

      {pcbLayoutImages && pcbLayoutImages.length > 0 && (
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-[#0088ff]">📐</span>
            PCB Layout Views
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pcbLayoutImages.map((img, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden border border-[#0088ff]/20 shadow-[0_0_20px_rgba(0,136,255,0.1)] hover:shadow-[0_0_30px_rgba(0,136,255,0.2)] transition-all group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img 
                  src={img} 
                  alt={`PCB Layout ${index + 1}`} 
                  className="w-full transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {view3dImages && view3dImages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <span className="text-[#0088ff]">🎨</span>
            3D Rendered Views
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {view3dImages.map((img, index) => (
              <motion.div
                key={index}
                className="rounded-xl overflow-hidden border border-[#0088ff]/20 shadow-[0_0_20px_rgba(0,136,255,0.1)] hover:shadow-[0_0_30px_rgba(0,136,255,0.2)] transition-all group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img 
                  src={img} 
                  alt={`3D View ${index + 1}`} 
                  className="w-full transition-transform duration-500 group-hover:scale-110" 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
