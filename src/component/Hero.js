import React, { useRef } from 'react'
import '../css/Hero.css'
import SearchIcon from '@material-ui/icons/Search'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'

import { useHistory } from 'react-router-dom'

function Hero() {
    const history = useHistory();
    const input = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('button')
        const search = input.current.value;
        if (search)
            history.push(`/s/${search}`);
    }

    return (
        <div className='hero'>
            <img className='hero__image' src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />

            <div className='hero__content'>
                <div className='hero__contentWrapper'>
                    <h1 className='hero__contentTitle'>Unsplash</h1>
                    <br />
                    <h3 className='hero__contentSubtitle'>The internet's source of freely-usable images.</h3>
                    <h3>Powered by creators everywhere.</h3>
                    <br />
                    <form onSubmit={handleSubmit} className='hero__contentInput'>
                        <SearchIcon className='header__icon' />
                        <input ref={input} type='text' className='hero__ContentInputField' />
                        <ImageSearchIcon className='header__icon' />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Hero
