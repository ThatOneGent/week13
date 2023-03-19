import React from "react";
import Access from "./access";
import NavTop from "./navtop";

export default class Main extends React.Component {

    render () {

        return (
            <React.StrictMode>
            <div className="container-fluid">
                <NavTop/>
            </div>
            <br/>
            <div className='container'>
                <Access/>
            </div>
</React.StrictMode>
        );

    }
}
