'use client';

import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

function AnimatedModel() {
    const group = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF('/models/man.glb');

    // Setup animation mixer
    const mixer = React.useMemo(() => new THREE.AnimationMixer(scene), [scene]);
    React.useEffect(() => {
        if (animations.length > 0) {
            const action = mixer.clipAction(animations[animations.length - 1]);
            action.play();
            return () => animations.forEach(clip => mixer.uncacheClip(clip));
        }
    }, [animations, mixer]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return <primitive
      ref={group}
      object={scene}
      position={[0, -0.7, 0]} 
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]} 
      dispose={null}
    />

}

export default function ModelViewer() {
    return (
        <div className="w-full h-full md:h-[28rem] ">
            <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[0, 4, 6]} intensity={2} />
                <Suspense
                    fallback={
                        <Html center>
                            <div className="text-white">Loading...</div>
                        </Html>
                    }
                >
                    <AnimatedModel />
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    minDistance={1.5}
                    maxDistance={4}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}
