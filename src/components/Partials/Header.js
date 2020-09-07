import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    AiOutlineMenuUnfold
} from 'react-icons/ai';

function Header() {
    const currentUser = useSelector((state) => state.currentUser.currentUser);

    return (
        <header className='header'>

            <nav className='wrap-search'>

                <input type="checkbox" id="toggle-menu" />
                <label htmlFor="toggle-menu" className="menu-icon">
                    <AiOutlineMenuUnfold />
                </label>

                <Link className='header__link logo-cenima' to='/'>
                    Cinema
                </Link>


                <div className='menu'>
                    <div className='menu__item'>
                        <Link to='/movies'>Movies</Link>
                    </div>
                    <div className='menu__item'>
                        <Link to='/theaters'>Theaters</Link>
                    </div>
                    <div className='menu__item'>
                        <Link to='/membership'>Membership</Link>
                    </div>
                </div>

            </nav>

            <form>
                <input
                    tpye='search'
                    id='search'
                    name='search'
                    placeholder='Search movies...'
                />
                <label htmlFor='search'>Search</label>
            </form>

            <div className='header__login-register'>
                {!currentUser ? (
                    <Link className='header__link item' to='/register'>
                        Register
                    </Link>
                ) : (
                        ""
                    )}
                {!currentUser ? (
                    <Link className='header__link item' to='/login'>
                        Login
                    </Link>
                ) : (
                        <Link className='header__link item' to='/logout'>
                            Logout
                        </Link>
                    )}
            </div>

            <Link className='header__link logout' to='/logout'>
                Logout
            </Link>
        </header>
    );
}

export default Header;
