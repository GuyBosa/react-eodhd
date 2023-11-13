import  styles from './Home.module.css';
import React, { useState, useEffect } from "react";

function Home() {

    const [html, setHTML] = useState({__html: ""});
    
      useEffect(() => {
        async function createMarkup() {
          const headers = { 'Authorization': '6551c5f5412c82.86254239' };
          let response;
          response = await fetch(`https://eodhd.com/financial-apis/new-real-time-data-api-websockets`, { headers })
           const backendHtmlString = await response.text()
    
           console.log("API Data:::", backendHtmlString)
            return {__html: backendHtmlString};
         }
         createMarkup().then(result => setHTML(result));
      }, []);
      
      return <div className={`${styles.home}`} dangerouslySetInnerHTML={html} />;

}

export default Home;
