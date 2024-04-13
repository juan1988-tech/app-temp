import { useState } from "react";

export const useAppUI = () =>{
    const [inicio,changeInicio] = useState(false);

    const onChangeInicio = ()=>{
        changeInicio(!inicio);
        console.log(inicio)
    }
    return { inicio,
             onChangeInicio};
}

