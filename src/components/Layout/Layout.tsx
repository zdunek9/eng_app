import { Wrapper } from "./Layout.style"
import Navigation from "./Navigation"
const Layout: React.FC<{children:React.ReactNode}> = (props) =>{
    return(
        <Wrapper>
        <Navigation/>
        <main>{props.children}</main>
        </Wrapper>
    )
}
export default Layout