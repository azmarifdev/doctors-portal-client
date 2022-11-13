import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';

function App() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <RouterProvider router={Routes}></RouterProvider>
        </div>
    );
}

export default App;
