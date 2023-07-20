import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';

function PageNotFound(){
    return (
        <div>
            <NavBar></NavBar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="page-not-found">
                <h1 id="page-not-found-h1">The page could not be found!</h1>
                <p id="page-not-found-p">Looks like we couldn't find the page you were looking for, sorry about that! <br></br>Please click <a href="/">here</a> or on any links in the navbar to go back to the website, thank you!</p>
            </div>
        <Footer></Footer>
        </div>
    )
}

export default PageNotFound;
