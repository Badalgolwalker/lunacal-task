import React, { useEffect, useState } from 'react'
import item from "../itemdata.json"

const imagewidget = () => {
  const [form, setForm] = useState(false);
  

  const [imageArray, setimageArray] = useState([])
  useEffect(() => {
    setimageArray(item)
   }, [])
   const addimage = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setimageArray([...imageArray,event.target.result]);
        setForm("")
        
      };
     
      reader.readAsDataURL(file);
    }
  };
 
  return (
    <>

      <div className="w-[85%] h-[46%] bg-zinc-800 rounded-lg ">
        <div className="h-[50px] w-[100%] flex items-center justify-between px-5">
          <h1 className="font-bold text-2xl font-[Anurati] text-white">
            Gallery
          </h1>
          {form ? (
            <input
              type="file"
            
              placeholder="image"
              onChange={addimage}
            />
          ) : (
            ""
          )}
          <button className="bg-neutral-600 rounded-full text-white py-1 px-3" onClick={() => setForm(true)}>
            Add image
          </button>
        </div>
        <div className=" h-[82%] relative flex items-center justify-center gap-4 flex-nowrap">
          {imageArray.map((item, index) => (
            
          <div key={index} className="h-[80%] w-[30%] bg-red-600 overflow-hidden rounded-3xl">
          <img className="w-full h-full" src={item} alt="" />
          </div>
          ))}
        </div>
      </div>
    
      
    </>
  )
}

export default imagewidget
