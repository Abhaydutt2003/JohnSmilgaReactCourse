import { useState } from "react";

const useToggle = (defaultState)=>{
    const [show,setShow] = useState(defaultState);
    const toggle = ()=>{
        setShow(!show);
    }
    return {show,toggle};
}

export default useToggle;