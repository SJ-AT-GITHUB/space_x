/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';

const useDidUpdateEffect = (callback, dependencies) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) callback();
    else didMountRef.current = true;
  }, dependencies);
};

export default useDidUpdateEffect;