import { useEffect, useState } from 'react';

const usePresistedState = (sessionStorageKey, initialState) => {
  const [state, setState] = useState(() => {
    const presistedValue = sessionStorage.getItem(sessionStorageKey);

    return presistedValue ? JSON.parse(presistedValue) : initialState;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [sessionStorageKey, state]);

  return [state, setState];
};

export const useSearchStr = () => {
  return usePresistedState('searchString', '');
};
