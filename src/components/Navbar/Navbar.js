import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">ProyectoKenyi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" >Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Items">Items</Link>
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