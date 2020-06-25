const initialState = {
    backgroundColor : "#EEE2DC",
    blueColor: "#123C69",
    userName: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        //Handle changing background color action
        case 'CHG_BGCLR': 
            return {
                ...state,
                backgroundColor: action.chosenColor,
            }
        //Handle changing username
        case 'UPD_USERNAME': 
            return{
                ...state,
                userName: action.userName,
            }
        default:
            return state
    }
}

export default reducer;