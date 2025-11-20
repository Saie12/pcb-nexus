import { motion } from "framer-motion";

interface ConceptSectionProps {
  concept: string;
  schematicImage?: string;
}

export default function ConceptSection({ concept, schematicImage }: ConceptSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
        <motion.span 
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xl"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0,255,136,0.4)" }}
        >
          1
        </motion.span>
        Concept & Schematics
      </h2>
      
      <div className="space-y-6">
        {concept.split('\n\n').map((paragraph, idx) => {
          const isBoldSection = paragraph.match(/^\*\*(.+?)\*\*/);
          
          if (isBoldSection) {
            const [title, ...content] = paragraph.split('**');
            const cleanTitle = title.trim();
            const cleanContent = content.join('').trim();
            
            return (
              <motion.div 
                key={idx} 
                className="bg-[#111111] border border-[#00ff88]/10 rounded-xl p-6 hover:border-[#00ff88]/30 hover:shadow-[0_0_20px_rgba(0,255,136,0.1)] transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-[#00ff88] mb-3">
                  {cleanTitle}
                </h3>
                <p className="text-gray-400 leading-relaxed">{cleanContent}</p>
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

      {schematicImage && (
        <motion.div 
          className="mt-6 rounded-xl overflow-hidden border border-[#00ff88]/20 shadow-[0_0_20px_rgba(0,255,136,0.1)] hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={schematicImage}
            alt="Schematic"
            className="w-full transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
      )}
    </motion.div>
  );
}
