import { api } from "../api"

export const getAllGames = async () => {
    return api.get('/games').then((response) => {
        return response.data
    })
}

export const getSpecificGame = async (id : number) => {
    return api.get(`/game?id=${id}`).then((response) => {
        return response.data
    })
}