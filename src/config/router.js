import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../containers/home'
import Chat from '../containers/chat'

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route excat path='/' component={Home}/>
                <Route excat path='/' component={Chat}/>
            </Router>
        )
    }
}
export default AppRouter;