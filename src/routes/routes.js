import React from 'react'
import Category from '../components/category/Category';
import Checkout from '../components/checkout/Checkout';
import Confirmation from '../components/confirmation/Confirmation';
import FormLogin from '../components/formlogin/FormLogin';
import FormSignUp from '../components/formlogin/FormSignUp';
import FormFgpw from '../components/formlogin/FormFgpw';
import Home from '../components/home/Home';
import SingleProduct from '../components/singleproduct/SingleProduct';
import NotFound from './../components/notfoundpages/NotFound';
import ProFile from './../components/profile/ProFile';
import Cart from './../components/cart/Cart'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/category',
        exact: false,
        main: () => <Category />
    },
    {
        path: '/product/:id',
        exact: false,
        main: ({ location, history,match }) => <SingleProduct location={location} history={history} match={match}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({ location, history }) => <FormLogin location={location} history={history} />
    },
    {
        path: '/signup',
        exact: false,
        main: ({ location, history }) => <FormSignUp location={location} history={history} />
    },
    {
        path: '/forgotpw',
        exact: false,
        main: ({ location, history }) => <FormFgpw location={location} history={history} />
    },
    {
        path: '/profile',
        exact: false,
        main: ({ location, history }) => <ProFile location={location} history={history} />
    },
    {
        path: '/cart',
        exact: false,
        main: ({ location, history }) => <Cart location={location} history={history} />
    },
    {
        path: '/checkout',
        exact: false,
        main: ({ location, history }) => <Checkout location={location} history={history} />
    },
    {
        path: '/confirm',
        exact: false,
        main: ({ location, history }) => <Confirmation location={location} history={history} />
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFound />
    },
]
export default routes;