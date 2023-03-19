import React from 'react';

export default class Access extends React.Component {
    render() {

        return (
            <React.StrictMode>

                <form className='text-center card'> 
                    <h3 className='fancyText'>Log In</h3>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <input id="inputUName" className="form-control" type="text" name="uName" placeholder="Username" />

                                <input id="inputSNAE" className="form-control" type="text" name="snae" placeholder="Speak Friend and Enter..." />
                            </div>
                            <div className="col-md-4"></div>



                        </div><br />
                        <div className='row'>
                        <div className="col-md-4"></div>
                        <div className="col-md-4"><button onclick="" type="button" className="btn btn-secondary fancyText">Submit (But not really)</button></div>
                        <div className="col-md-4"></div>

                            
                        </div>
                    </div>

                </form>
            </React.StrictMode>
        );

    }
}