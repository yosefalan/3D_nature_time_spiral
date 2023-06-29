import { useRef  } from 'react'
import { useFrame } from '@react-three/fiber';
import { OrbitControls  } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { LensFlare } from "@andersonmancini/lens-flare";
import { folder, useControls } from "leva";
import { Color } from 'three'
import CustomObject from './CustomObject'
import './style.css';


const BigBang = () => {

  const lensFlareProps = useControls({
    LensFlare: folder(
      {
        enabled: { value: true, label: "enabled?" },
        opacity: { value: 1.0, min: 0.0, max: 1.0, label: "opacity" },
        position: { value: { x: -25, y: 6, z: -60 }, step: 1, label: "position" },
        glareSize: { value: 0.35, min: 0.01, max: 1.0, label: "glareSize" },
        starPoints: {
          value: 6.0,
          step: 1.0,
          min: 0,
          max: 32.0,
          label: "starPoints",
        },
        animated: { value: true, label: "animated?" },
        followMouse: { value: false, label: "followMouse?" },
        anamorphic: { value: false, label: "anamorphic?" },
        colorGain: { value: new Color(56, 22, 11), label: "colorGain" },

        Flare: folder({
          flareSpeed: {
            value: 0.4,
            step: 0.001,
            min: 0.0,
            max: 1.0,
            label: "flareSpeed",
          },
          flareShape: {
            value: 0.1,
            step: 0.001,
            min: 0.0,
            max: 1.0,
            label: "flareShape",
          },
          flareSize: {
            value: 0.005,
            step: 0.001,
            min: 0.0,
            max: 0.01,
            label: "flareSize",
          },
        }),

        SecondaryGhosts: folder({
          secondaryGhosts: { value: true, label: "secondaryGhosts?" },
          ghostScale: { value: 0.1, min: 0.01, max: 1.0, label: "ghostScale" },
          aditionalStreaks: { value: true, label: "aditionalStreaks?" },
        }),

        StartBurst: folder({
          starBurst: { value: true, label: "starBurst?" },
          haloScale: { value: 0.5, step: 0.01, min: 0.3, max: 1.0 },
        }),
      },
      { collapsed: true }
    ),
  });

  // const { camera, gl} = useThree();
  const cube = useRef()
  const sphere = useRef()
  const groupRef = useRef();

  useFrame((state, delta) => {

    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 8
    // state.camera.position.z = Math.cos(angle) * 8
    // state.camera.lookAt(0, 0, 0);
    // groupRef.current.rotation.y += delta;

  })

  return (
<>

    <OrbitControls makeDefault />
    <directionalLight position={[1, 2, 3]}/>
    <ambientLight />

    <group ref={ groupRef } >
      <mesh ref={ sphere } position={[-0,0,0]} >
        <sphereGeometry args={[ 1, 32, 32]} />
        <meshStandardMaterial color='white' />
      </mesh>
    </group>

    <EffectComposer>
      <LensFlare {...lensFlareProps} dirtTextureFile={"/lensDirtTexture.png"} />leo and mathilde zouk
      <Vignette />
          <Bloom mipmapBlur radius="0.9" luminanceThreshold="0.966" intensity="2" levels="4" />
    </EffectComposer>

      <CustomObject />
</>

  )
}

export default BigBang
