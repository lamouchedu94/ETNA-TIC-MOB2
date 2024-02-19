import { api } from "../api"

export const getAllGames = async () => {
    return api.get('/games').then((response) => {
        return response.data
    })
}