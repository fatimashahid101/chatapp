import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { set_data, facebook_login } from '../../store/action';




class Home extends React.Component {
    render(){
        console.log("home props=>>", this.props)
        return(
            <div>
                <h1>Home</h1>
                <button onClick={this.props.set_data()}>Set data</button>
                <button onClick={this.props.facebook_login()}>facebook login</button>
            </div>
        );
        }
    }


    const mapStateToProps = (state) => ({
        users: state.users
    })

    const mapDispatchToProps = (dispatch) => ({
        set_data : () => dispatch(set_data()),
        facebook_login : () => dispatch(facebook_login())
    })

    export default connect(mapStateToProps,mapDispatchToProps)(Home);