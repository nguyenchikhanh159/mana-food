import React from 'react'
import Sigup from './../components-food/Signup';
import Login from './../components-food/Login';
import FoodList from './../components-food/FoodList';
// import NotFound from './../components/notfoundpages/NotFound';

const routes = [
    {
        path: '/login',
        exact: true,
        main: () => <Login/>
    },
    {
        path: '/signup',
        exact: false,
        main: ({ location, history }) => <Sigup location={location} history={history} />
    },
    {
        path: '/list-product',
        exact: true,
        main: () => <FoodList/>
    },
    // {
    //     path: '',
    //     exact: false,
    //     main: ()=> <NotFound />
    // },
]
export default routes;