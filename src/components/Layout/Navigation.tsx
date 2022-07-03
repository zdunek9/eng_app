import { Wrapper } from './Navigation.styles'
const Navigation: React.FC<{changeLogModalHandler:()=>void}>= props =>{


    const onchangeLogModalHandler = () =>{
        props.changeLogModalHandler()
    }
    return (
        <Wrapper>
            <p>Cool Name</p>
            <button>Random Questinon</button>
            <button>Favorite Question</button>
            <button onClick={onchangeLogModalHandler}>Login</button>
        </Wrapper>
    )
}
export default Navigation;