import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { geolocation } = navigator;
    const handleSuccess = pos => {
      const { latitude, longitude } = pos.coords;

      setLocation({ latitude, longitude });
    };

    const handleError = error => {
      setError(error.message);
    };

    // 사용된 브라우저에서 지리적 위치(Geolocation)가 정의되지 않은 경우 오류로 처리합니다.
    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }
    geolocation.getCurrentPosition(handleSuccess, handleError);

    return () => setLocation(null);
  }, []);

  return { location, error };
};

export default useGeolocation;
