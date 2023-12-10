import React from 'react';


const  CreateUsers = ()=>{
    return (
       <div className='container-fluid' style={{ width: '80%', alignItems: 'center' }}>
        <form >
        <br></br>
            Enter Name:  <input type="text"></input> <br></br><br></br>
            Enter Age:   <input type="number"></input> <br></br><br></br>
            <button type="submit" onClick="" >Create</button>
        </form>
       </div>
    )
}


export default CreateUsers