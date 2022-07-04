import ContactInfo from "../../components/AuthItems/ContactInfo/ContactInfo"
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres"
import { WelcomeScreen, Wrapper } from "./HomePageAuth.style"
import flags from '../../components/styles/Images/flags.png'

const HomePageAuth = () =>{
    return(
        <Wrapper>
            <WelcomeScreen>
            <img src={flags} alt="flag" /><div>
            <h1>Welcome!</h1>
            <h2>Generate new question,</h2>
            <h2>or visit favorites</h2>
            </div>
            </WelcomeScreen>
            <DailyProgres />
            <ContactInfo />
        </Wrapper>
    )
}
export default HomePageAuth