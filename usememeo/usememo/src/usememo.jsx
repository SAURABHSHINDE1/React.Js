import { memo, useRef } from "react";

const Usememo = ({biodata}) => {

    const rendercount = useRef(0)
    
    return ( <>

        <h1>useMemo</h1>
        <p>useMemo is a React Hook that lets you cache the result of a calculation between renders.</p>

        <p>Render Count: {rendercount.current++} </p>

        <p>{biodata.name} {biodata.age}</p>
    
    
    </> );
}
 
export default memo(Usememo);