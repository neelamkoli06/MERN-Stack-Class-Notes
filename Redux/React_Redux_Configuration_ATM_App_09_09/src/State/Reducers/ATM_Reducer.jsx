

const ATM_Reducer = (state = 0, action) => {


    if (action.type === 'Deposit') {
        return state + action.payload
    }

    else if (action.type === 'Withdraw') {
        return state - action.payload
    }

    else {
        return state
    }


}


export default ATM_Reducer;