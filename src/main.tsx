import { Toaster } from "@/components/ui/sonner";
import { VlyToolbar } from "../vly-toolbar-readonly.tsx";
import { InstrumentationProvider } from "@/instrumentation.tsx";
import AuthPage from "@/pages/Auth.tsx";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "./index.css";
import CustomCursor from "@/components/CustomCursor.tsx";
import Landing from "./pages/Landing.tsx";
import NotFound from "./pages/NotFound.tsx";
import Services from "./pages/Services.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import "./types/global.d.ts";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

function RouteSyncer() {
  const location = useLocation();
  useEffect(() => {
    window.parent.postMessage(
      { type: "iframe-route-change", path: location.pathname },
      "*",
    );
  }, [location.pathname]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data?.type === "navigate") {
        if (event.data.direction === "back") window.history.back();
        if (event.data.direction === "forward") window.history.forward();
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}

function AssetPreloader() {
  const location = useLocation();
  
  useEffect(() => {
    // Only start preloading after initial page is loaded
    const preloadAssets = () => {
      // Preload 3D models in the background
      const models = ['/assets/High_Speed_Ethernet_Interface.glb'];
      
      // Use requestIdleCallback for non-blocking preload
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          models.forEach((modelPath) => {
            fetch(modelPath)
              .then(() => console.log(`✅ Preloaded: ${modelPath}`))
              .catch(() => console.warn(`⚠️ Failed to preload: ${modelPath}`));
          });
        }, { timeout: 2000 });
      }
    };

    // Wait for page to be interactive before preloading
    if (document.readyState === 'complete') {
      setTimeout(preloadAssets, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(preloadAssets, 1000);
      });
    }
  }, [location.pathname]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InstrumentationProvider>
      <VlyToolbar />
      <CustomCursor />
      <ConvexAuthProvider client={convex}>
        <BrowserRouter>
          <RouteSyncer />
          <AssetPreloader />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<AuthPage redirectAfterAuth="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ConvexAuthProvider>
    </InstrumentationProvider>
  </StrictMode>,
);