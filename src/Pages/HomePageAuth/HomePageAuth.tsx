import ContactInfo from "../../components/AuthItems/ContactInfo/ContactInfo"
import DailyProgres from "../../components/AuthItems/DailyProgres/DailyProgres"
import { WelcomeScreen, Wrapper } from "./HomePageAuth.style"
import flags from '../../components/styles/Images/flags.png'
import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { counterActions } from '../../Redux/store'


const URL = ''                                                                                              //tutaj
const HomePageAuth = () =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        const fetchData = async()=>{
          const response = await fetch(URL)
          const responseData = await response.json();
          const itemTab = []
          for(const item in responseData){
            itemTab.push({
                id: item,
                question: responseData[item].Ang,
                questionPol: responseData[item].Pol
            })
          }
          dispatch(counterActions.updateQuestion(itemTab));
          dispatch(counterActions.rollRandomQuestion())
        }
        fetchData()
    },[])
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