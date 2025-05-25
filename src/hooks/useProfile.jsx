import { useState } from "react";

function useProfile() {
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  const onChangePhoto = (e)=>{
    const file = e.target.files[0];
    setPhoto(file);

    if(file) {
      const reader = new FileReader();
      reader.onload = ()=>setPhotoUrl(reader.result);
      reader.readAsDataURL(file);
    } else {
      setPhotoUrl(null);
    }
  }

  return {photo, photoUrl, onChangePhoto, setPhotoUrl};
}

export default useProfile