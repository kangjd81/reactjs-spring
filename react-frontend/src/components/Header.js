import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">KAOS Admin</a></div>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/nodes">노드관리 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">서비스관리</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">스케쥴관리</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">이력관리</a>
                                </li>
                                리소스관리(대시보드)
                                부가기능
                            </ul>
                        </div>
                    </nav>

                </header>
            </div>
        )
    }
}

export default Header
