import React from "react";

export default function Footer(){
    
    const currentdate = new Date().getFullYear();
    return(
        <div className="footer">
            <div>
                © {currentdate} Job Finder, All rights reserved.
            </div>

        </div>

    )
}