
import './App.css';
import { Canvas } from '@react-three/fiber';
import BigBang from './BigBang'
import Malik from './Malik'
import * as THREE from 'three'

function App() {
  return (
    <div className="App">
      <Canvas
      flat
      dpr={1}
      gl={{ alpha: false, stencil: false, antialias: false, depth: false }}
      camera={{ position: [8, 0, 10], near: 0.5, fov: 35 }}>
        {/* <BigBang /> */}
        <Malik/>
      </Canvas>
    </div>
  );
}

export default App;
