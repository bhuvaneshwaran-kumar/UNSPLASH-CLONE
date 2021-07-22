import React from 'react'
import { Button, Avatar } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AddIcon from '@material-ui/icons/Add'
import ArroeDownwardIcon from '@material-ui/icons/ArrowDownward'
function Image({ data }) {
    return (
        <div className='image'>
            <div className='image__header'>
                <Button variant='contained' size='small' disabledElevation className='image__button'>
                    <FavoriteIcon fontSize='small' />
                </Button>
                <Button variant='contained' size='small' disabledElevation className='image__button'>
                    <AddIcon fontSize='small' />
                </Button>
            </div>
            <img src={data.imageUrl} alt='Unsplash api images,' className='image__img' />
            <div className='image__footer'>
                <a href={data.profileUrl} target='blank'>
                    <Avatar src={data.userImageUrl} alt='user' />
                    <h4 className='image__footerLeftName'>
                        {data.username}
                    </h4>
                </a>
                <Button variant='contained' size='small' disabledElevation className='image__button' titlt='Download Photo' >
                    <ArroeDownwardIcon fontSize='small' />
                </Button>
            </div>

        </div >
    )
}

export default Image
