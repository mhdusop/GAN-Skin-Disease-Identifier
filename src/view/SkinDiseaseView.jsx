import { useState } from "react";

export const ImageUpload = () => {
   const [preview, setPreview] = useState(null);

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setPreview(reader.result);
         };
         reader.readAsDataURL(file);
      }
   };

   return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
         <h2>Upload Gambar</h2>
         <input type="file" accept="image/*" onChange={handleImageChange} />
         <h3>Preview:</h3>
         {preview && (
            <div style={{ marginTop: "20px" }}>
               <img
                  src={preview}
                  alt="Preview"
                  style={{ width: "300px", height: "auto" }}
               />
            </div>
         )}
      </div>
   );
};