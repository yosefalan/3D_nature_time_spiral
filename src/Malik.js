import React from 'react'
import { OrbitControls  } from '@react-three/drei'
import * as THREE from 'three'


const Malik = () => {

  return (
  <>

    <OrbitControls makeDefault />
    <directionalLight position={[1, 2, 3]}/>
    <ambientLight />

    <mesh position={[-0,0,0]} >
      <sphereGeometry args={[ 1, 32, 32]} />
      <meshStandardMaterial color='white' />
    </mesh>
  </>
  )
}

export default Malik
