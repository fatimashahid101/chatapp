const INITIAL_STATE = {
    users : [
        {
            name : "fatima",
            email: "fatimashahid600@gmail.com"

        }
     ]
}
export default (state= INITIAL_STATE, action) => {
    switch (action.type){
        case "SETDATA" :
            return ({
                users : [...state.users, action.user]
            })
    }
    return state;
}