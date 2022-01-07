import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    const { geolocation } = navigator;

    const getPosition = () => {
      return new Promise((resolve, reject) => {
        geolocation.getCurrentPosition(resolve, reject);
      });
    };

    getPosition()
      .then(position => {
        const {
          coords: { latitude, longitude },
        } = position;
        if (mounted) {
          setLocation({ latitude, longitude });
        }
      })
      .catch(error => {
        setError(error);
      });

    return () => (mounted = false);
  }, []);

  return { location, error };
};

export default useGeolocation;
