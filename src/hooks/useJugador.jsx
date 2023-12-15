import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const useJugador = () => {
  //   const { id } = useParams() sale de react-router-dom;
  const { state } = useLocation();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      setPlayer(state);
      setLoading(false);
    }, 3000);
  }, []);

  return {
    player,
    loading,
    navigate
  }
}

export default useJugador