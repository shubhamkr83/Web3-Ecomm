import React from 'react'
import { NavLink } from "react-router-dom";
import { ethers } from 'ethers';


const Navbar = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }
    return (
        <>
            <nav>
                <div className='nav__brand'>
                    <h1>SHOPPERIA</h1>
                </div>

                <input
                    type="text"
                    className="nav__search" placeholder='Search your product...'
                />

                {account ? (
                    <button
                        type="button"
                        className='nav__connect'
                    >
                        {account.slice(0, 6) + '...' + account.slice(38, 42)}
                    </button>
                ) : (
                    <button
                        type="button"
                        className='nav__connect'
                        onClick={connectHandler}
                    >
                        SignIn & Connect
                    </button>
                )}
                <ul className="nav__links">
                    <li>
                        <NavLink
                            className="navbar-link"
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navbar-link"
                            to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navbar-link"
                            to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navbar-link"
                            to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar