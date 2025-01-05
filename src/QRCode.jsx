
import React, { useState } from 'react'
import './QRCode.css'

export const QRCode = () => {
  const [img,setImg] = useState("");
  const [loading,setLoading] = useState(false);
  const  [qrData,setQrData] = useState("");
  const  [qrSize,setQrSize] = useState("");

  async function generateQR() {
    setLoading(true);
    try{
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    }
    catch(error){
      console.error("Error generating QR Cdode", error);
    }
    finally{
      setLoading(false)
    }
  }
  function downloadQR(){
      fetch(img)
      .then((response)=>response.blob())
      .then((blob)=>{
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "QR Code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      });
  }
  return (
    <div className='App-container'>
      <h1>QR Code generator</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} className='qr-code-image'/>}
      <div>
        <label htmlFor='dataInput' className='input-lable'>Data for QR Code</label>
        <input type='text' value={qrData} onChange={(e)=>setQrData(e.target.value)} id='dataInput' placeholder='Enter data for QR Code'/>

        <label htmlFor='sizeInput' className='input-lable'>Image size (e.g.,150):</label>
        <input type='text' value={qrSize} onChange={(e)=>setQrSize(e.target.value)} id='sizeInput' placeholder='Enter image sige'/>

        <button className='generate-btn' disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className='download-btn' onClick={downloadQR}>Download QR Code</button>
      </div>
    </div>
  )
}

