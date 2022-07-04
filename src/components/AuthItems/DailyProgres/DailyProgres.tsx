import { Wrapper, ContainerProgres } from "./DailyProgres.style"

const DailyProgres = () =>{
    return(
        <Wrapper>
        <div>0/5</div>
        <ContainerProgres>
            <div>
            <span></span>
            </div>
        </ContainerProgres>
        <p>Daily Progress</p>
        </Wrapper>
    )
}
export default DailyProgres