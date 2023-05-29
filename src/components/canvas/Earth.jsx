// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf");
//   return (
//     <primitive object={earth.scene} scale={0.2} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     // <Canvas
//     //   shadows
//     //   frameloop="demand"
//     //   gl={{ preserveDrawingBuffer: true }}
//     //   camera={{
//     //     fov: 45,
//     //     near: 0.1,
//     //     far: 200,
//     //     position: [-2, 3, 5],
//     //   }}
//     // >
//     <Canvas
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 80,
//         near: 450,
//         far: 3000,
//         position: [40, 20, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />

//         <Earth />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

// import React, { useRef } from "react";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
// import * as THREE from "three";

// import EarthDayMap from "../../../public/planet/textures/8k_earth_daymap.jpg";
// import EarthNormalMap from "../../../public/planet/textures/8k_earth_normal_map.jpg";
// import EarthSpecularMap from "../../../public/planet/textures/8k_earth_specular_map.jpg";
// import EarthCloudsMap from "../../../public/planet/textures/8k_earth_clouds.jpg";
// import { TextureLoader } from "three";

// const EarthCanvas = () => {
//   const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
//     TextureLoader,
//     [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
//   );

//   const earthRef = useRef();
//   const cloudsRef = useRef();

//   useFrame(({ clock }) => {
//     const elapsedTime = clock.getElapsedTime();

//     earthRef.current.rotation.y = elapsedTime / 6;
//     cloudsRef.current.rotation.y = elapsedTime / 6;
//   });

//   return (
//     <>
//       {/* <ambientLight intensity={1} /> */}
//       <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.5} />

//       <mesh ref={cloudsRef} position={[0, 0, 3]}>
//         <sphereGeometry args={[1.005, 32, 32]} />
//         <meshPhongMaterial
//           map={cloudsMap}
//           opacity={0.4}
//           depthWrite={true}
//           transparent={true}
//           side={THREE.DoubleSide}
//         />
//       </mesh>
//       <mesh ref={earthRef} position={[0, 0, 3]}>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshPhongMaterial specularMap={specularMap} />
//         <meshStandardMaterial
//           map={colorMap}
//           normalMap={normalMap}
//           metalness={0.4}
//           roughness={0.7}
//         />
//         {/* <OrbitControls
//           enableZoom={false}
//           enablePan={true}
//           enableRotate={true}
//           zoomSpeed={0.6}
//           panSpeed={0.5}
//           rotateSpeed={0.4}
//           addEventListenerOptions={{ passive: true }} 
//         /> */}
//       </mesh>
//     </>
//   );
// };

// export default EarthCanvas;

import React from 'react'

function Earth() {
  return (
    <div>Earth</div>
  )
}

export default Earth