import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to="/">
                        <img src='./iconopagina.png' width='50'></img>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/" >Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Items">Items</Link>
                            </li>                   
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar