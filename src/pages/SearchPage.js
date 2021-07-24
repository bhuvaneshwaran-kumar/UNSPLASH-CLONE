import React, { useEffect, useState } from 'react'
import '../css/App.css'
import '../css/Image.css'
import Image from '../component/Image'
import { useParams } from 'react-router-dom'
import { getSearchImages } from '../unsplash'

function SearchPage() {
    const { searchTerm } = useParams()
    const [images, setImages] = useState([])
    useEffect(() => {
        getSearchImages(searchTerm)
            .then(async (res) => {
                let data = await res.json()
                data = data.results
                setImages(data.map((image) => (
                    {
                        id: image.id,
                        imageUrl: image.urls.regular,
                        compressedImageUrl: image.urls.regular.replace('q=80&w=1080', 'q=50&w=50'),
                        downloadUrl: image.urls.full,
                        username: image.user.username,
                        userImageUrl: image.user.profile_image.medium,
                        profileUrl: image.user.links.html
                    }
                )))
            })
            .catch(err => console.error(err))
    }, [searchTerm])
    return (
        <div className="wrapper">
            <div className="container">
                <h1 ClassName="title">{searchTerm}</h1>
                <div className="images__container">
                    {
                        images.map(image => <Image key={image.imageUrl} data={image} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
