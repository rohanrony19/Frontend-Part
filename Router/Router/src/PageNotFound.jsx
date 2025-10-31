import { Link } from "react-router";

export default function PageNotFound(){
    return(
        <div style={{textAlign:"center"}}>
            <h1>Page Not Found</h1>
            <h2>404 ERROR</h2>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
            <img src="https://www.aboutchromebooks.com/wp-content/uploads/2025/03/Impact-of-HTTP-404-Errors-on-Websites.jpg" alt="" width="60%"/>
        </div>
    )
}