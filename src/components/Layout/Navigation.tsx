import { useDispatch, useSelector } from 'react-redux'
import { Wrapper, TabLogg, TabLoggLast } from './Navigation.styles'
import { counterActions, RootState } from '../../Redux/store'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Navigation: React.FC =() =>{
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: RootState) => state.counter.isLogged)
    let navigate = useNavigate();

    const onchangeLogModalHandler = () =>{
        navigate(`/login`);
    }
    const onLogOutHandler = () =>{
        dispatch(counterActions.logout());
        navigate("/welcome")
    }
    return (
        <Wrapper>
            <p>Cool Name</p>
            {isLoggedIn &&<Link to="/home/random"><TabLogg>Random Questinon</TabLogg></Link>}
            {isLoggedIn&&<Link to="/home/favorites"><TabLogg>Favorite Question</TabLogg></Link>}
            {!isLoggedIn&&<TabLoggLast onClick={onchangeLogModalHandler}>Login</TabLoggLast>}
            {isLoggedIn&&<TabLoggLast onClick={onLogOutHandler}>Logout</TabLoggLast>}
        </Wrapper>
    )
}
export default Navigation;