
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useState } from 'react';
import axios from 'axios';

import toast, { } from "react-hot-toast"

const Profile = () => {
    const [file, setFile] = useState()

    const upload = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("file", file)
        await axios.post("/upload", formData)
            .then((data) => { toast.success(data.success) })
            .catch((err) => console.log(err))
    }
    return (

        <div className=' d-flex justify-content-center flex-wrap align-items-center p-md-5 border-5  mx-auto my-auto w-md-50' style={{ height: "100vh" }}>
            <form onSubmit={() => upload()} encType="multipart/form-data" className='m-3'>
                <CloudUploadIcon className='me-2' style={{ color: "var(--green)" }} />
                <input type="file" accept="image/*" className='w-75' onChange={(e) => setFile(e.target.files[0])} />
                <button type='submit' className='btn btn-primary mt-4'>Upload</button>
            </form>
        </div>

    )
}

export default Profile