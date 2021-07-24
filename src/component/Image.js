import React, { useRef, useEffect } from 'react'
import '../css/Image.css'
import { Button, Avatar } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AddIcon from '@material-ui/icons/Add'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
function Image({ data }) {
    const imageRef = useRef()
    const downloadImage = async () => {
        try {
            // First, we use fetch to get the ReadableStream data of the image
            const response = await fetch(data.downloadUrl)
            // Next, we call the blob method provided by fetch to get the raw image data
            const blob = await response.blob()
            // Third, we use the URL Web API to call the createObjectURL static method to create a URL that represents the image's download URL
            let url = window.URL.createObjectURL(blob);
            // Finally, an anchor element is created to set the new url to the href attribute. You can also set the name of the file by setting the download attribute of the anchor element. Last, we append the anchor element we created to the DOM and trigger a click to download the image and then quickly remove the anchor from the document.
            let a = document.createElement('a')
            a.style = 'display: none'
            document.body.appendChild(a)
            a.href = url
            a.download = data.id
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url)
        }
        catch (err) {
            alert('Something went wrong... Unable to download image')
        }


    }


    useEffect(() => {
        const interSectionObserverToLasyLoading = target => {

            const io = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => { entry.target.setAttribute('src', entry.target.getAttribute('data-src')) }, 100)
                        observer.disconnect()
                    }
                })
            }, {
                threshold: 0.25
            })

            io.observe(target)

        }

        interSectionObserverToLasyLoading(imageRef.current)
    }, [])


    return (<div className="image">
        <div className="image__header">
            <Button variant="contained" size="small" disableElevation className="image__button">
                <FavoriteIcon fontSize="small" />
            </Button>
            &nbsp; &nbsp; &nbsp;
            <Button variant="contained" size="small" disableElevation className="image__button">
                <AddIcon fontSize="small" />
            </Button>
        </div>

        <img ref={imageRef} data-src={data.imageUrl} src={data.compressedImageUrl} alt="" className="image__img" />

        <div className="image__footer">
            <a href={data.profileUrl} target="_blank" className="image__footerLeft" rel="noreferrer">
                <Avatar src={data.userImageUrl}>{data.username[0]}</Avatar>
                <h4 className="image__footerLeftName">
                    {data.username}
                </h4>
            </a>
            <Button onClick={downloadImage} variant="contained" size="small" disableElevation
                className="image__button" title="Download Photo">
                <ArrowDownwardIcon fontSize="small" />
            </Button>
        </div>
    </div>
    )
}

export default Image
