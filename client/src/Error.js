import React from 'react'
import './Error.css';
function Error() {


    return (
        <>
            <div className="error-container">
                <section className="page_404">

                    <div className="col-sm-10 col-sm-offset-1  text-center">
                        <div className="four_zero_four_bg">
                            <h1 className="text-center ">404</h1>
                        </div>

                        <div className="contant_box_404">
                            <div className="contant_box">
                                <h3 className="h2">
                                    Ooops page not found
                                </h3>

                                <p>the page you are looking for not avaible!</p>

                                <a href="/" className="link_404">Go to Home</a>

                            </div>

                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Error