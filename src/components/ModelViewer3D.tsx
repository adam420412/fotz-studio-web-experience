import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { RotateCcw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

interface ModelProps {
  url: string;
  autoRotate: boolean;
}

function Model({ url, autoRotate }: ModelProps) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  // Center and scale the model
  const box = new THREE.Box3().setFromObject(scene);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = 2 / maxDim;

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={scale} 
        position={[-center.x * scale, -center.y * scale, -center.z * scale]}
      />
    </group>
  );
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <span className="text-sm text-muted-foreground">Ładowanie modelu 3D...</span>
      </div>
    </Html>
  );
}

interface ModelViewer3DProps {
  modelUrl: string;
  title?: string;
  description?: string;
}

export function ModelViewer3D({ modelUrl, title, description }: ModelViewer3DProps) {
  const [autoRotate, setAutoRotate] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative bg-gradient-to-br from-card via-card to-muted/30 rounded-3xl border border-border overflow-hidden ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none" : "aspect-square md:aspect-video"
      }`}
    >
      {/* Controls */}
      <div className="absolute top-4 left-4 z-20 flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setAutoRotate(!autoRotate)}
          className={`backdrop-blur-sm ${autoRotate ? 'bg-primary text-primary-foreground' : 'bg-background/80'}`}
        >
          <RotateCcw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
          <span className="ml-2 hidden sm:inline">Auto-rotacja</span>
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={toggleFullscreen}
          className="backdrop-blur-sm bg-background/80"
        >
          <Maximize2 className="w-4 h-4" />
        </Button>
      </div>

      {/* Info overlay */}
      {(title || description) && (
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-background/80 backdrop-blur-md rounded-xl p-4 border border-border/50"
          >
            {title && <h3 className="font-semibold text-foreground mb-1">{title}</h3>}
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </motion.div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-background/60 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-muted-foreground">
          <span className="hidden md:inline">Przeciągnij aby obrócić • Scroll aby przybliżyć</span>
          <span className="md:hidden">Dotknij i przeciągnij</span>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1}
            castShadow
          />
          <spotLight 
            position={[-10, -10, -10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={0.5}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} color="#75143F" />
          <pointLight position={[0, -10, 0]} intensity={0.3} />

          {/* Model */}
          <Model url={modelUrl} autoRotate={autoRotate} />

          {/* Environment and shadows */}
          <Environment preset="studio" />
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2.5} 
            far={4} 
          />

          {/* Controls */}
          <OrbitControls 
            enablePan={false}
            enableZoom={true}
            minDistance={2}
            maxDistance={8}
            autoRotate={false}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
