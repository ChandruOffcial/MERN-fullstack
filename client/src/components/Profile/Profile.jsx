
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom"
import { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from "react-hot-toast"
import { UserContext } from "../../../context/UserContext.jsx"

const Profile = () => {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [file, setFile] = useState()
    const [update, setUpdate] = useState(true)
    const [oldImage, setOldImage] = useState()

    if (user) {
        const getProfileImage = async () => {
            try {
                await axios.get(`/profile-image/${user.id}`
                ).then((response) => {
                    const oldImage = response.data.file
                    const upload = response.data.upload
                    setUpdate(upload)
                    setOldImage(oldImage)
                }).catch((e) => {
                    console.log(e)
                });

            } catch (error) {
                console.log(error);
            }
        }

        getProfileImage()
    }

    const upload = async (e) => {
        e.preventDefault();

        if (!file) {
            toast.error("Please choose a file");
            return;
        }
        if (update) {
            try {
                const uploadFirst = false
                const formData = new FormData()
                formData.append("file", file)
                formData.append("userId", user.id)
                formData.append("upload", uploadFirst)
                await axios.post("/upload", formData)
                    .then(res => {
                        if (res.data.error) {
                            toast.error(res.data.error)
                        }
                        toast.success(res.data.success)
                        navigate("/")
                    })
                    .catch((err) => console.log(err)
                    )
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const uploadFirst = false
                const formData = new FormData()
                formData.append("file", file)
                formData.append("userId", user.id)
                formData.append("upload", uploadFirst)
                formData.append("oldImage", oldImage)
                await axios.patch("/update", formData)
                    .then(res => {
                        if (res.data.error) {
                            toast.error(res.data.error)
                        }
                        toast.success(res.data.success)
                        navigate("/")
                    })
                    .catch((err) => console.log(err)
                    )
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (

        <div className=' d-flex justify-content-center flex-wrap align-items-center p-md-5 border-5  mx-auto my-auto w-md-50' style={{ height: "100vh" }}>
            <form onSubmit={upload} encType="multipart/form-data" className='m-3'>
                <CloudUploadIcon className='me-2' style={{ color: "var(--green)" }} />
                <input type="file" accept="image/*" className='w-75' onChange={(e) => setFile(e.target.files[0])} />
                <button type='submit' className='btn btn-primary mt-4'>{update ? "Upload" : "Update"}</button>
            </form>
        </div>

    )
}

export default Profile