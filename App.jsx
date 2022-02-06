import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
const App = () => {
    const Name = () =>{
        return <h1> Hello, I am a Name Page</h1>;
    };
    return(
        <>
        <Switch>//show only one
            <Route exact path ="/" component={About} />
            {/* <Route  path ="/" component={About} /> */}
            <Route exact path ="/contact" component={Contact} />
            <Route path ="/contact/Name" component={Name} />
            <Route component={Error} />
        </Switch>

          {/* <About />
          <Contact /> */}

        </>
    );
}
export default App;
