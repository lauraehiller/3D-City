import {React, useEffect, useRef, Suspense, useState} from 'react';
import './Scene.scss';
import { Canvas  } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

/*import Building from './Building';*/
import { Bloom, Vignette, Noise, DepthOfField, EffectComposer } from '@react-three/postprocessing';
import { Stats} from "@react-three/drei";

import City from "./City.js";

function Scene() {

    return (
        <div className="canvas-container">
            <Canvas camera={{position: [0,5,5]}}>
                <color attach="background" args={['rgba(26, 0, 68, 1.0)']} />
                <pointLight position={[0,4,4]}/>
                <hemisphereLight intensity={0.3} position={[5, 10, 50]} />
                <Suspense fallback={null}>
                    <City position={[0,-2,-6]} rotation={[0,Math.PI * -4.5,0]}/>
                </Suspense>
                
                <fog attach="fog" color="rgba(26, 0, 68, 1.0)" near={0} far={25}/>
                <OrbitControls />
                <EffectComposer >
                    <Bloom threshold={1} strength={0.5} radius={0.5}/>
                    <Vignette eskil={false} offset={0.1} darkness={0.8} />
                </EffectComposer>
                <Stats />

            </Canvas>
            
        </div>
    )
};
  
export default Scene;