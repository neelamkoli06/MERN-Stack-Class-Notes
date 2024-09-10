const Deposit = ((amt) => {

    return ((dispatch) => {
        dispatch({
            type: 'Deposit',
            payload: amt,
        })
    })

})


const Withdraw = ((amt) => {
    return ((dispatch) => {
        dispatch({
            type: 'Withdraw',
            payload: amt,
        })
    })
})


export { Withdraw, Deposit };