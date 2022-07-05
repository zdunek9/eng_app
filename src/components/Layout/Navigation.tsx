import { useDispatch, useSelector } from 'react-redux'
import { Wrapper } from './Navigation.styles'
import { counterActions, RootState } from '../../Redux/store'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
            {isLoggedIn &&<Link to="/home/random"><button>Random Questinon</button></Link>}
            {isLoggedIn&&<Link to="/home/favorites"><button>Favorite Question</button></Link>}
            {!isLoggedIn&&<button onClick={onchangeLogModalHandler}>Login</button>}
            {isLoggedIn&&<button onClick={onLogOutHandler}>Logout</button>}
        </Wrapper>
    )
}
export default Navigation;