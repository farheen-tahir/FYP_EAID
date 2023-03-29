import React from "react";
import { Button } from "react-bootstrap";
function Newsletter() {
    return <>
        <div>
            <form>
            <input type="text" placeholder="Email" name="email"/>
          
            <button className="btnlogin" type="submit">LOGIN</button>
            </form>
        </div>
    </>
}
export default Newsletter;
