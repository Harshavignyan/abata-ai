import React, { Fragment } from 'react';

function Tododisplay({data,index,del}){

    return(
        <div className="flex gap-3">
            <li>{data}</li>
            {console.log(data)}
            <button className="border-2" onClick={del}>Del</button>
        </div>
    )
}

export default Tododisplay;