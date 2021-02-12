import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const UploadForm = ()=>{
  const [file,setFile]=useState(null);
  const [error,setError]=useState(null);
  const types=['image/png','image/jpeg','image/gif'];
  
  const changeHandler=(e)=>{
    let selected =e.target.files[0];
    if(selected && types.includes(selected.type)){
      setFile(selected);
      setError('');
    }else{
      setFile(null);
      setError("Please select a image file");
    }
  }
  return(
    <form className="upload-form">
      <label>
        <input type="file" onChange={changeHandler} />
          <span>
          <FontAwesomeIcon className="icon"icon={ faCloudUploadAlt }/>
            <h6>Upload Image</h6>
          </span>
      </label>
      <div className="output">
      {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar  file={file} setFile={setFile}/>}
      </div>
    </form> 
  )
}
export default UploadForm;