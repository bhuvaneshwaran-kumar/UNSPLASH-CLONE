import { useState, useEffect, useRef } from 'react'
import '../css/Header.css';
import { useHistory, useLocation } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ImageSearchIcon from '@material-ui/icons/ImageSearch'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import { Button, Tooltip, Menu, MenuItem, Avatar } from '@material-ui/core'

import Categories from './Categories.js'
function Header() {
    const history = useHistory()
    const location = useLocation()
    const [showCategories, setShowCategories] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const inputRef = useRef()

    const goToHomePage = () => history.push('/')

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (inputRef.current === '') return
        history.push(`/s/${inputRef.current.value}`)

    }

    const handleOpen = (e) => setAnchorEl(e.currentTarget)
    const handleClose = () => setAnchorEl(false)

    useEffect(() => {
        if (location.pathname === '/') setShowCategories(true)
    }, [location.pathname])


    useEffect(() => {

        let unListen = history.listen((location, action) => {
            if (location.pathname === '/') {
                inputRef.current.value = ''
                setShowCategories(true)
            }

            const tempArray = location.pathname.split('s/')
            if (tempArray.length === 2) {
                inputRef.current.value = tempArray[1]
                setShowCategories(false)
            }
        })

        return unListen
    }, [history])

    return (
        <div className={`header__wrapper ${showCategories && 'border-bottom'}`}>
            <div className='header'>
                <img onClick={goToHomePage} src='https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg' alt='unSplash_Logo' className='header__Logo' />

                <form onSubmit={handleSearchSubmit} className="header__input">
                    <SearchIcon className="header__icon" />
                    <input ref={inputRef} type='text' className='header__inputField' placeholder='Search free high-resolution photos' />
                    <ImageSearchIcon className="header__icon" />
                </form>

                <div className='header__right'>
                    <div className='header__rightButtonWrapper'>
                        <Button onClick={goToHomePage} size='small' className='header__rightButton'>Home</Button>
                        <Button size='small' className='header__rightButton'>Brands</Button>
                    </div>

                    <div> {/* Drop Down Menu */}
                        <Tooltip title='More Options' arrow>
                            <MoreHorizIcon className='header__rightIcon header__rightOptionsIcon' onClick={handleOpen}
                                aria-controls="simple-menu" aria-haspopup="true"
                            />
                        </Tooltip>

                        <Menu
                            elevation={5}
                            getContentAnchorEl={null}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem>
                                <span className="header__rightMenuItem">Blogs</span>
                            </MenuItem>
                            <MenuItem>
                                <span className="header__rightMenuItem">Topics</span>
                            </MenuItem>
                            <MenuItem>
                                <span className="header__rightMenuItem">Collections</span>
                            </MenuItem>
                            <MenuItem>
                                <span className="header__rightMenuItem">Community</span>
                            </MenuItem>
                        </Menu>
                    </div>

                    <Button className="header__rightButton" size='small' disabledElevation={true} variant='contained'>
                        Submit a Photo
                    </Button>

                    <NotificationsActiveIcon className="header__rightIcon header__rightBellIcon" />

                    <Avatar className="header__rightAvatar" />

                </div>

            </div>
            {/* Show Categories only in Home */}
            {
                showCategories && <Categories />
            }
        </div>

    )

}

export default Header