// КОНСТАНТЫ ДЛЯ ЭКШН-КРИЭЙТОРОВ
const GET_ALL_USERS = 'GET_ALL_USERS'
const SET_USER_NAME = 'SET_USER_NAME'

export type initialStateType = typeof initialState

let initialState = [
    {id: 1, name: 'Egor', age: 33},
    {id: 2, name: 'Dima', age: 20},
    {id: 3, name: 'Oleg', age: 28},
    {id: 4, name: 'Kolya', age: 25},
    {id: 5, name: 'Vasya', age: 30},
]

type getUsersType = {
    type: typeof GET_ALL_USERS,
}

type setUserName = {
    type: typeof SET_USER_NAME,
    userID: number,
    newName: string,
}

type actionType = getUsersType | setUserName

const userReducer = (state: initialStateType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case GET_ALL_USERS: {
            return [...state]
        }
        case SET_USER_NAME: {
            return [...state].map(user => user.id === action.userID ? {...user, name: action.newName} : user)
        }
        default: {
            return state
        }
    }
}

export const setUserNameAC = (userID: number, newName: string) => ({type: SET_USER_NAME, userID: userID, newName: newName})

export default userReducer;






// Как один из способов типизации state //

// type stateType = {
//     id: number
//     name: string
//     age: number
// }

// let initialState: stateType[] = [
//     {id: 1, name: 'Egor', age: 33},
//     {id: 2, name: 'Dima', age: 20},
//     {id: 3, name: 'Oleg', age: 28},
//     {id: 4, name: 'Kolya', age: 25},
//     {id: 5, name: 'Vasya', age: 30},
// ]

// export const useReducer = (state: stateType[], action: any): any => {} (Второй способ)

