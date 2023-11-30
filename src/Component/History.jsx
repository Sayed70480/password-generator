import React, { useState, useEffect, useRef,memo} from 'react';
import { IoCopy } from 'react-icons/io5';
import history from './history.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {dummypass}  from './Dummypass.jsx'
import Swal from 'sweetalert2'

function History({ copypassword }) {
  const [listcopypassword, setListcopypassword] = useState(dummypass);
  useEffect(() => {
    if(!listcopypassword.includes(copypassword.value)){
      if (copypassword.value) {
        const updatedList = [copypassword.value, ...listcopypassword];
        if (updatedList.length > 10) {
          updatedList.pop(); // Remove the oldest password
        }
        setListcopypassword(updatedList);
      }
    }
  }, [copypassword]);

  const copypasswordRef = useRef(null);
  // for clear history btn
  const clearallhistory = () => {
    Swal.fire({
      title: 'ARE YOU SURE TO CLEAR HISTORY',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#00f0ff',
      cancelButtonText: 'NO',
      cancelButtonTextColor : 'black',
      confirmButtonText: 'YES',
      customClass:"pop"
    }).then((result) => {
      if (result.isConfirmed) {
        setListcopypassword([]);
      }
  
  })
}


  const notify = (copied) => {
    toast.success(`Coping: ${copied}`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  // for copy password to clipboard
  const copyPasswordtohistory = (index) => {
    if (listcopypassword.length > 0) {
      const textToCopy = listcopypassword[index];
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // alert()
          notify(textToCopy);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  return (

     <div className='history-section'>
      {/* history heading */}
      <div className='histroy-heading'>PASSWORD HISTORY</div>
      {/* history body */}
      <div className='histroy-body'>
        { listcopypassword.length > 0 && (
          listcopypassword.map((pass, index) => (
            /* show history  copy password */
            <div className='history-data' key={index} >
              <div className='copy-password'>
                <h6 ref={copypasswordRef}>{index + 1} : {pass}</h6>
              </div>
              <IoCopy className='copy-icon' onClick={() => copyPasswordtohistory(index)} />
            </div>
          ))
        )}
      </div>
      {/* clear history btn */}<div className='history-clear-btn'>
      {listcopypassword.length > 0 ? 
        <h6 onClick={clearallhistory}>CLEAR HISTORY</h6>
      : null }
     </div> 
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>

  );
}

export default memo(History)
