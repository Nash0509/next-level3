'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Stars() {
    const group = useRef();
    const count = 1000;

    useFrame(() => {
        group.current.rotation.x += 0.001;
        group.current.rotation.y += 0.001;
    });

    const stars = Array(count).fill().map(() => {
        const x = (Math.random() - 0.5) * 1000;
        const y = (Math.random() - 0.5) * 1000;
        const z = (Math.random() - 0.5) * 1000;

        return (
            <mesh position={[x, y, z]} key={x}>
                <sphereGeometry args={[1, 8, 8]} />
                <meshStandardMaterial color="white" />
            </mesh>
        );
    });

    return (
        <group ref={group}>
            {stars}
        </group>
    );
}

const Hero = () => {
    return (
        <div className='relative h-screen text-center'>
            <Canvas className='fixed top-0 left-0 w-screen h-screen'>
                <ambientLight />
                <pointLight position={[0, 0, 5]} />
                <Stars />
            </Canvas>
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col p-6'>
                <div className='font-bold text-3xl'>
                    Learn the <code className='bg-white text-black p-1'>Better</code> way with us __
                </div>
                <div className="text-white text-center mt-8">
                  We are a productive learning platform and we make short videos for learning to code.
                </div>
                <div className="mt-16">
                <button className="border p-3 border-slate-400 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 rounded">Explore</button>
            </div>
            </div>
        </div>
    );
}

export default Hero;
