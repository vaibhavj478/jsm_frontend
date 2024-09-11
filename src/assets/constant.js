
import {  toast } from 'react-toastify';


 
export  const notify = (msg, type) => {
  toast[type](`🦄 ${msg}`, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

}


export const whatsAppUrl  =  `https://wa.me/9785530017`
