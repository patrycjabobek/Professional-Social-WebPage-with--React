import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes/userTypes';
import { ISingleUser } from '../../entities/users';
// stworzenie funcji która będzie pobierac dane z API
// middleware jest po to any można było użyć zapisu poniżej ( funcja zwraca funcję) pomiędzy rozłożeniem akcji a..
export const getUsers = (): Promise<ISingleUser> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // wyciąga nam dane 
        .then((usersList) => { // usersLis to wynik działania powyższej liniki
            dispatch({
                type: actionTypes.GET_USERS, // wykonamy ta akcją
                usersList // wrzucić takie dane w usersreducers.ts (payload)
            })
        })
}) as any;