import { useState } from "react";
import "./styles.css"; // Pastikan Anda mengimport file CSS di komponen

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

    return ( <
        div className = "container" >
        <
        h2 > Upload Gambar < /h2> <
        input type = "file"
        accept = "image/*"
        onChange = { handleImageChange }
        /> <
        button > Upload < /button> <
        h3 > Preview: < /h3> {
            preview && ( <
                img src = { preview }
                alt = "Preview" / >
            )
        } <
        /div>
    );
};