import React, { lazy, Suspense  } from 'react';
import Loader from '../../components/Loader/Loader';
import '../../assets/styles/main.css'
const Home = lazy(() => import('../Home/Home'));

const App = (props) => {

  return (
    <Suspense fallback={<Loader/>}>
      <Home/>
    </Suspense>
  );
}

export default App;