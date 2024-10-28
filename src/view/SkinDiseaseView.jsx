import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Komponen utama untuk halaman unggah gambar
const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    // Fungsi untuk menangani perubahan pada input file
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Upload Gambar</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {preview && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Preview:</h3>
                    <img src={preview} alt="Preview" style={{ width: '300px', height: 'auto' }} />
                </div>
            )}
        </div>
    );
};

// Render komponen ImageUpload ke elemen dengan id "root"
ReactDOM.render(<ImageUpload />, document.getElementById('root'));
