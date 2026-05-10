import React, { useRef, useEffect } from "react";
import ThreeGlobe from "three-globe";
import { useThree } from "@react-three/fiber";

const ThreeGlobeWrapper = React.forwardRef((props, ref) => {
  const globeRef = useRef();
  const { scene } = useThree();

  useEffect(() => {
    if (globeRef.current) {
      const globeInstance = new ThreeGlobe(props);
      scene.add(globeInstance);
      if (ref) {
        ref.current = globeInstance;
      }
      return () => {
        scene.remove(globeInstance);
        globeInstance.dispose();
      };
    }
  }, [scene, props, ref]);

  return <group ref={globeRef} />;
});

export default ThreeGlobeWrapper;
