import React from 'react';


const Uploader = (props) =>(
  <button className = 'lineupSubmit' id = 'button'>
    <input type = 'file' id = 'file' onChange = {props.uploadLineup}
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
    Upload Lineup
  </button>

)

export default Uploader
