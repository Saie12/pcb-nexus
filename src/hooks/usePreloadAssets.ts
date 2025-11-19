import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useLocation } from 'react-router';

interface PreloadConfig {
  models: string[];
  routes: string[];
  priority: 'high' | 'low';
}

export function usePreloadAssets(config: PreloadConfig) {
  const [preloadStatus, setPreloadStatus] = useState<{
    models: Record<string, boolean>;
    routes: Record<string, boolean>;
  }>({
    models: {},
    routes: {},
  });
  const location = useLocation();

  useEffect(() => {
    // Wait for initial page to be fully loaded
    const startPreloading = () => {
      // Preload 3D models first (high priority)
      if (config.priority === 'high') {
        preloadModels();
      }

      // Then preload routes
      setTimeout(() => {
        preloadRoutes();
      }, 2000); // Wait 2 seconds after initial load

      // Preload low-priority models last
      if (config.priority === 'low') {
        setTimeout(() => {
          preloadModels();
        }, 4000);
      }
    };

    // Start preloading after the page is interactive
    if (document.readyState === 'complete') {
      startPreloading();
    } else {
      window.addEventListener('load', startPreloading);
      return () => window.removeEventListener('load', startPreloading);
    }
  }, []);

  const preloadModels = () => {
    const loader = new GLTFLoader();

    config.models.forEach((modelPath) => {
      // Use requestIdleCallback for non-blocking loading
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          loader.load(
            modelPath,
            () => {
              setPreloadStatus((prev) => ({
                ...prev,
                models: { ...prev.models, [modelPath]: true },
              }));
              console.log(`✅ Preloaded 3D model: ${modelPath}`);
            },
            undefined,
            (error) => {
              console.warn(`⚠️ Failed to preload model: ${modelPath}`, error);
            }
          );
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          loader.load(
            modelPath,
            () => {
              setPreloadStatus((prev) => ({
                ...prev,
                models: { ...prev.models, [modelPath]: true },
              }));
              console.log(`✅ Preloaded 3D model: ${modelPath}`);
            },
            undefined,
            (error) => {
              console.warn(`⚠️ Failed to preload model: ${modelPath}`, error);
            }
          );
        }, 100);
      }
    });
  };

  const preloadRoutes = () => {
    config.routes.forEach((route) => {
      // Skip current route
      if (route === location.pathname) return;

      // Use link prefetching
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          document.head.appendChild(link);

          setPreloadStatus((prev) => ({
            ...prev,
            routes: { ...prev.routes, [route]: true },
          }));
          console.log(`✅ Prefetched route: ${route}`);
        });
      }
    });
  };

  return preloadStatus;
}
