import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, PresentationControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface Model3DViewerProps {
  modelPath: string;
  className?: string;
}

function Model({ modelPath }: { modelPath: string }) {
  const gltf = useLoader(GLTFLoader, modelPath);
  return <primitive object={gltf.scene} />;
}

export default function Model3DViewer({ modelPath, className = "" }: Model3DViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress for better UX
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative w-full h-[500px] rounded-xl overflow-hidden border border-[#00ff88]/20 bg-[#111111] ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        onCreated={() => {
          setLoadProgress(100);
          setTimeout(() => setIsLoading(false), 500);
        }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <PresentationControls
              global
              snap
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Model modelPath={modelPath} />
            </PresentationControls>
          </Stage>
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
        </Suspense>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
      </Canvas>

      {/* Enhanced Loading indicator with progress */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111]/90 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loader2 className="w-12 h-12 animate-spin text-[#00ff88] mb-4" />
          <div className="w-48 h-2 bg-[#00ff88]/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#00ff88]"
              initial={{ width: "0%" }}
              animate={{ width: `${loadProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-sm text-[#00ff88] mt-4 font-medium">
            Loading 3D Model... {loadProgress}%
          </p>
        </motion.div>
      )}

      {/* Interaction hint */}
      {!isLoading && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-[#00ff88] font-medium">
            🖱️ Drag to rotate • Scroll to zoom • Right-click to pan
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}