import React, { useState, useEffect, useRef } from 'react'
import Hero from '../component/Hero'
import Image from '../component/Image'
import '../css/App.css'
import { getRandomImages } from '../unsplash'
function HomePage() {

    const [images, setImages] = useState([])
    const imageOuter = useRef()

    // let tempUrl = 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    useEffect(() => {
        /*
             let arr = []
             for (let i = 0; i < 30; i++) {
                arr.push({
                    imageUrl: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                    id: i,
                    compressedImageUrl: tempUrl.replace('w=1950&q=80', 'q=50&w=50'),
                     downloadUrl: tempUrl,
                   username: 'bhuvi',
                     userImageUrl: tempUrl,
                   profileUrl: tempUrl
                 })
             }
             setImages(arr)
        */
        getRandomImages()
            .then(async (res) => {
                const data = await res.json()
                let imagesData = data.map(image => ({
                    id: image.id,
                    imageUrl: image.urls.regular,
                    compressedImageUrl: image.urls.regular.replace('q=80&w=1080', 'q=50&w=50'),
                    downloadUrl: image.urls.full,
                    username: image.user.username,
                    userImageUrl: image.user.profile_image.medium,
                    profileUrl: image.user.links.html
                }))
                setImages(imagesData)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <Hero />

            <div className="wrapper">
                <div className='container'>
                    <div className='images__container' ref={imageOuter}>
                        {
                            images.map(image => (
                                <Image key={image.imageUrl} data={image} imageOuter={imageOuter} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
