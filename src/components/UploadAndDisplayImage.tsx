import React, { useState } from 'react';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState<null | File>(null);

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={'250px'}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={event => {
          const file: File = event!.target!.files![0];
          const formdata = new FormData();
          formdata.append('file', file);
          fetch('http://localhost:4000/api/upload', {
            method: 'POST',
            body: formdata,
          })
            .then(() => {
              setSelectedImage(file);
            })
            .catch(e => console.error(e));
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
