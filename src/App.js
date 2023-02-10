import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import PreLoaderSpinner from './components/PreLoaderSpinner/PreLoaderSpinner';
import router from './Routes/Routes/Routes';

function App() {

  const [isPreLoading, setIsPreLoading] = useState(true);

  useEffect( () => {
    setTimeout( () => {
      setIsPreLoading(false);
    }, 2500)
  })

  return (
    <div className="min-h-screen">
      {
        isPreLoading ? <PreLoaderSpinner></PreLoaderSpinner> : <><RouterProvider router={router}></RouterProvider>
        <Toaster></Toaster></>
      }
    </div>
  );
}

export default App;
