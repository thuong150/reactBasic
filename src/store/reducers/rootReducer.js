const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi dan it' }
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            //code
            console.log('>>> run into delete user: ', action);

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000)
            let user = { id: id, name: `random -  ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer