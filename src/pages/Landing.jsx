import React, {useEffect} from 'react';
import axios from 'axios'
import Home from './Home';

const Landing = () => {
  useEffect(()=> {
    axios.get('/api/hello')
    .then(response =>console.log(response.data))
  }, [])

  return (
    <div>
      <Home />
    </div>
  );
};

export default Landing;