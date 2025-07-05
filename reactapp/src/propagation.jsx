import '../src/propagation.css'

export const Propagation =()=>{

    const grandParentclick= (e)=>{
       
        console.log("grand parent click")
    }

     const Parentclick= (e)=>{
  
        console.log("parent click")
    }

    
     const buttonclick= (e)=>{
        
        
        console.log("button click")
    }

    return(
        <section>
            <div className='g-parent' onClickCapture={grandParentclick}> 
                <div className='parent' onClickCapture={Parentclick}> 
                    <button onClickCapture={buttonclick}>click mee</button>
                </div>
            </div>
        </section>
    )
}





