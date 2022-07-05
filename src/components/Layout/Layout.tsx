import Navigation from "./Navigation"
const Layout: React.FC<{children:React.ReactNode}> = (props) =>{
    return(
        <>
        <Navigation/>
        <main>{props.children}</main>
        </>
    )
}
export default Layout