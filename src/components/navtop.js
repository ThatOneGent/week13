import React from 'react';

export default class NavTop extends React.Component {
    render() {

        return (
            /* 
                        <div>
                            Nav Top section
                        </div>
            
             */

            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">Week 13 Coding Assignment</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle Navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>

                    </ul>

                </div>

            </nav>


        );

    }
}