import React from 'react';

function Feed() {
  return (

 <div className="d-flex bd-highlight col-12 border rounded white">
   <div className="p-2 w-100 bd-highlight">
        <div className="form-check-inline text-left ">
             All Updates
        </div>
   </div>
   <div className="p-2 ms-5 w-100 bd-highlight ">
       <div className="form-check-inline ">
           <div className="form-group ">
              <select className="form-control form-select white" id="demo">
                <option defaultValue>Everything</option>
               <option>Recent</option>
                <option>Past</option>
              </select>
           </div>
       </div>
   </div>
 </div>

    );
  }

  export default Feed;