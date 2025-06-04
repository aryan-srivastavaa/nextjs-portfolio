'use client';

import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

function Scene() {
  // Load all 3 models
  const tableGltf = useGLTF('/models/Table.glb');
  const laptopGltf = useGLTF('/models/Desk.glb');
  const manGltf = useGLTF('/models/Man.glb');

  // Refs for models if you want to animate or adjust dynamically
  const manRef = useRef<THREE.Group>(null);
  const laptopRef = useRef<THREE.Group>(null);
  const tableRef = useRef<THREE.Group>(null);

  // Optional: Animate man to look at laptop
  // This example just sets a fixed rotation
  React.useEffect(() => {
    if (manRef.current && laptopRef.current) {
      // Calculate vector from man to laptop
      const manPos = new THREE.Vector3().setFromMatrixPosition(manRef.current.matrixWorld);
      const laptopPos = new THREE.Vector3().setFromMatrixPosition(laptopRef.current.matrixWorld);

      const direction = new THREE.Vector3().subVectors(laptopPos, manPos).normalize();

      // Calculate rotation angle on Y axis for man to face laptop
      const angle = Math.atan2(direction.x, direction.z);
      manRef.current.rotation.y = angle;
    }
  }, []);

  return (
    <group>
      {/* Table at origin */}
      {/* <primitive
        ref={tableRef}
        object={tableGltf.scene}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      /> */}

      {/* Laptop placed on top of table (adjust y as needed based on your model) */}
      <primitive
        ref={laptopRef}
        object={laptopGltf.scene}
        position={[0, 0, 1]} // Raise laptop on table height, adjust as necessary
        scale={[1, 1, 1]}
        rotation={[0, 3*Math.PI/2, 0]}
      />

      {/* Man placed beside the table, looking at laptop */}
      <primitive
        ref={manRef}
        object={manGltf.scene}
        position={[1.5, -0.8, 0]} // To the right of table; adjust as needed
        scale={[1, 1, 1]}
        rotation={[0, 3*Math.PI/2, 0]}
      />
    </group>
  );
}

export default function ModelScene() {
  return (
    <div className="w-full h-96 md:h-[28rem]">
      <Canvas camera={{ position: [1, 1, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={5} />
        <Suspense
          fallback={
            <Html center>
              <div className="text-white">Loading...</div>
            </Html>
          }
        >
          <Scene />
        </Suspense>
        <OrbitControls
          enableZoom
          minDistance={2}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
