import Navigation from "./Navigation"
const Layout: React.FC<{children:React.ReactNode, changeLogModalHandler:()=>void}> = (props) =>{
    const changeLogModalHandler = () =>{
        props.changeLogModalHandler()
    }
    return(
        <>
        <Navigation changeLogModalHandler={changeLogModalHandler}/>
        <main>{props.children}</main>
        </>
    )
}
export default Layout