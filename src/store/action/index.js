// import firebase from 'firebase'
// import Firebase from '../../config/firebase'

const set_data = () => {
    return(dispatch) => {
        console.log("RUNNING...")
        dispatch ({type : "SETDATA", 
    user: "HIBA",
    email: "hibashahid@gmail.com"
    })
    }
}

const facebook_login = () => {
    return(dispatch) => {
        console.log("RUNNING...")
        dispatch ({type : "SETDATA", 
    user: "HIBA",
    email: "hibashahid@gmail.com"
    })
    }
}


export  {
    set_data,
    facebook_login
};