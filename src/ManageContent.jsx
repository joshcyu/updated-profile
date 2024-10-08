import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { jsx } from 'react/jsx-runtime'

const ManageContent = (props) => {
  const {handleContent} = props
  let content =[]
  const [image, setImage] = useState([])
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [stacks, setStacks] = useState('')
  let  [queuedImages, setqueuedImages] = useState([])

  const handleImageChange = (event) => {
    const newImage = event.target.files[0]

    if (queuedImages.length > 0) {
      return
    }
    setImage(event.target.files[0])
    setqueuedImages([...queuedImages, newImage])
  }

  function handleAddContent(newContent) {
    content = JSON.parse(localStorage.getItem('item'))
    content.push(newContent)
    console.log(content)
    persistData(content)
    location.reload()
  }

  function persistData(item) {
    localStorage.setItem('item', JSON.stringify(item))
  }

  const handleUpload = async () => {
    if (!image) return

    setLoading(true)

    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'my_upload_preset')

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/da93vlump/image/upload`, // Replace with your Cloud Name
        formData
      )

      const photoUrl = response.data.secure_url // Get the image URL from the response

      // Now you can send all the data to your backend or store it locally
      const itemData = {
        title,
        description,
        stacks,
        status,
        photoUrl,
      }

      console.log('Item Data:', itemData) // Here you can send this data to your backend

      handleAddContent(itemData)

      // Optionally reset the fields after submission
      
      resetForm()
    } catch (error) {
      console.error('Error uploading image:', error)
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setTitle('')
    setDescription('')
    setStatus('')
    setStacks('')
    setImage(null)
    setUrl('')
  }

useEffect(() => {
  content = JSON.parse(localStorage.getItem('item'))
  console.log(content)
},[])
  
  return (
    <div className='fixed flex justify-center items-center w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 bg-gray-500/25 z-[10] text-copythirtiary'>
      <div className='flex flex-col w-[90%] sm:w-[30%] p-5 bg-grape gap-4 rounded-md'>
      <div className='flex gap-2'>
          <input type="file" accept="image/*" id='uploads' className='hidden' onChange={
          handleImageChange} />
          <label htmlFor="uploads" className='text-copysecondary text-3xl sm:text-3xl text-center cursor-pointer my-4 bg-grape2 p-2 w-[15%] sm:w-[12%] hover:text-copysecondary/70 hover:bg-grape2/70 rounded-md'><i class="fa-solid fa-plus"></i></label>
          {queuedImages.map((images, imagesIndex)=> {
            return (
            <div className='flex w-[20%] h-[100px]' key={imagesIndex}>
              <img className='w-[100%] h-[100%]' src={URL.createObjectURL(images)}/>
            </div> )
            }  
           )  
        } 
        </div> 
               
          <input
            type="text"
            placeholder="Title"
            value={title}
            className='focus:outline-0 border-b-2 bg-transparent'
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            className='focus:outline-0 border-b-2 bg-transparent'
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Tech Stacks Used"
            value={stacks}
            className='focus:outline-0 border-b-2 bg-transparent'
            onChange={(e) => setStacks(e.target.value)}
          />
          <input
            type="text"
            placeholder="Status"
            value={status}
            className='focus:outline-0 border-b-2 bg-transparent'
            onChange={(e) => setStatus(e.target.value)}
          />
          <div className='flex gap-4 mt-4'>
            <button onClick={handleUpload} disabled={loading} className='p-2 bg-grape2 rounded-md hover:bg-grape2/70'>
              {loading ? 'Uploading...' : 'Upload Image'}
            </button>
            {url && <img src={url} alt="Uploaded" style={{ width: '300px', marginTop: '20px' }} />}
            <button className='p-2 hover:bg-grape/70 hover:text-copysecondary' onClick={() => {
              handleContent()
            } }>Cancel</button>
          </div>
      </div>
    </div>
  )
}

export default ManageContent
