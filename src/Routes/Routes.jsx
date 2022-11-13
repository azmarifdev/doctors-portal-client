import {createBrowserRouter} from 'react-router-dom'
import Main from '../Layouts/Main'
import Appointment from '../pages/Appointment/Appointment/Appointment';
import Home from '../pages/Home/Home/Home';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/appointment',
                element: <Appointment/>
            }
        ]
    }
])

export default Routes;