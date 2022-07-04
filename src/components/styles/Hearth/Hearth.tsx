import { HearthIcon } from "./Hearth.style"

const Hearth = () =>{
    return(
        <HearthIcon>
        <label className="like">
          <input type="checkbox"/>
          <div className="hearth" />
        </label>
        </HearthIcon>
    )
}
export default Hearth