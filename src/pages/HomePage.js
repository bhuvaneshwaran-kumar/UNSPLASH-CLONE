import React, { useState, useEffect } from 'react'
import Hero from '../component/Hero'
import { getRandomImages } from '../unsplash'
function HomePage() {

    const [images, setImage] = useState()

    useEffect(() => {
        getRandomImages()
            .then(async (res) => {
                const data = await res.json()
                let imagesData = data.map(image => ({
                    id: image.id,
                    imageUrl: image.urls.regular,
                    downloadUrl: image.urls.full,
                    username: image.user.username,
                    userImageUrl: image.user.profile_image.medium,
                    profileUrl: image.user.links.html
                }))
                console.log(imagesData)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Hero />

            <div className="wrapper">
                <div className='contaoner'>
                    <div className='image__container'>
                        {

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
