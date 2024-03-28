import React, { useState } from 'react';

const UploadFile = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            console.error('No file selected.');
            return;
        }

        // Initialize the Google Drive API client
        const client = window.gapi.client;

        // Create file metadata
        const fileMetadata = {
            name: file.name,
        };

        // Create file upload parameters
        const media = {
            mimeType: file.type,
            body: file,
        };

        try {
            // Upload the file to Google Drive
            const response = await client.drive.files.create({
                requestBody: fileMetadata,
                media,
                fields: 'id',
            });

            console.log('File uploaded. File ID:', response.result.id);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadFile;
