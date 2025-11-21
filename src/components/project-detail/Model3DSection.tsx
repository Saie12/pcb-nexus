import { motion } from "framer-motion";
import Model3DViewer from "@/components/Model3DViewer";

interface Model3DSectionProps {
  slug: string;
}

export default function Model3DSection({ slug }: Model3DSectionProps) {
  const shouldShowModel = [
    "high-speed-ethernet-interface",
    "esp32-dual-relay-wifi-smart-switch",
    "cellular-enabled-stm32-gps-asset-tracker"
  ].includes(slug);

  if (!shouldShowModel) return null;

  // Map project slugs to their respective 3D model files
  const modelPaths: Record<string, string> = {
    "high-speed-ethernet-interface": "/assets/High_Speed_Ethernet_Interface_1_.glb",
    "cellular-enabled-stm32-gps-asset-tracker": "/assets/STM32_GPS_Tracker_1_.glb",
    "esp32-dual-relay-wifi-smart-switch": "/assets/High_Speed_Ethernet_Interface_1_.glb" // placeholder
  };

  const modelPath = modelPaths[slug] || "/assets/High_Speed_Ethernet_Interface.glb";

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 flex items-center gap-3">
          <motion.span 
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00BFFF]/20 border border-[#00ff88]/40 text-2xl shadow-[0_0_20px_rgba(0,255,136,0.2)]"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 0 30px rgba(0,255,136,0.4)",
              rotate: 360 
            }}
            transition={{ duration: 0.6 }}
          >
            🎨
          </motion.span>
          Interactive 3D Model
        </h2>
        <motion.p 
          className="text-gray-400 text-lg ml-15"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Explore the PCB design in full 3D - rotate, zoom, and inspect every detail
        </motion.p>
      </div>
      <Model3DViewer modelPath={modelPath} />
    </motion.div>
  );
}