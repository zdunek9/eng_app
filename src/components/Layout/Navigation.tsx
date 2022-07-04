import { useDispatch, useSelector } from 'react-redux'
import { Wrapper } from './Navigation.styles'
import { counterActions, RootState } from '../../Redux/store'
const Navigation: React.FC<{changeLogModalHandler:()=>void}>= props =>{
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: RootState) => state.counter.isLogged)
    

    const onchangeLogModalHandler = () =>{
        props.changeLogModalHandler()
    }
    const onLogOutHandler = () =>{
        dispatch(counterActions.logout());
    }
    return (
        <Wrapper>
            <p>Cool Name</p>
            {isLoggedIn &&<button>Random Questinon</button>}
            {isLoggedIn&&<button>Favorite Question</button>}
            {!isLoggedIn&&<button onClick={onchangeLogModalHandler}>Login</button>}
            {isLoggedIn&&<button onClick={onLogOutHandler}>Logout</button>}
        </Wrapper>
    )
}
export default Navigation;