import React, { useContext } from 'react'
import AuthContext from '../../context/auth/authContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext

    return (
        <div>
            <Route {...rest} render={props => !isAuthenticated && !loading ? (
                <Redirect to='/login'></Redirect>
            ) : (
                    <Component {...props} />
                )}></Route>

        </div>
    )
}

export default PrivateRoute;