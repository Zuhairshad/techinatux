"use client";

/*
 * "Gaming PC" by AbhinavRaj50 (https://sketchfab.com/AbhinavRaj50)
 * licensed under CC-BY-4.0 (https://creativecommons.org/licenses/by/4.0/)
 */

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, OrbitControls, useProgress, Html } from "@react-three/drei";
import * as THREE from "three";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-accent animate-spin" />
        <span className="text-xs text-white/40 font-mono">{Math.round(progress)}%</span>
        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
}

function Model() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/custom-gaming-pc/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef} scale={0.53} position={[0, 0, 0]}>
      <primitive object={scene} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-3, 4, -2]} intensity={0.4} color="#ff5500" />
      <spotLight position={[0, 6, 0]} intensity={0.3} angle={0.5} penumbra={1} color="#ff5500" />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={1.0} />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.35}
          scale={8}
          blur={3}
          far={5}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={1.0}
        minPolarAngle={1.0}
        autoRotate={false}
      />
    </>
  );
}

export default function Hero3DModel() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[600px]">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 4.3, 7], fov: 38, near: 0.1, far: 30 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
