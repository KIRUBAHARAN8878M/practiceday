function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-light">
                <div className="container-fluid ">
                    <a className="navbar-brand text-warning fw-bold fs-3" href="#">Trend Setter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-light" id="navbarTogglerDemo01">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link fs-6 text-dark " aria-current="page" href="#home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-6  text-dark" href="#card">COLLECTION</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-6 text-dark" href="#footer">CONTACT</a>
                            </li>

                        </ul>

                    </div>
                    <button class="btn btn-outline-warning" type="submit">Sign In</button>
                </div>
            </nav>

        </>
    );

}

export default Nav;