import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {initialStateType, setUserNameAC} from "../redux/userReducer";

function Users() {

    const dispatch = useDispatch()
    const users = useSelector<AppStateType, initialStateType>(state => state.users) // видит глобально из store
    const changeUserName = (userID: number, newName: string) => {
        dispatch(setUserNameAC(userID, newName))
    }


    return (
        <div>
            <div className='wrapper'>
                <span>Простой вывод users</span>
                <div>
                    {users.map(user => <div key={user.id}> {user.name} {user.age} </div>)}
                </div>
            </div>

            <div className='wrapper'>
                <span>Изменение имени у юзера </span>
                <div>
                    {users.map(user => {
                            return (
                                <div key={user.id}>
                                    <div>{user.name} {user.age}</div>
                                    <button onClick={() => changeUserName(user.id, "New Name")}>Изменить имя</button>
                                </div>)
                        }
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Users;