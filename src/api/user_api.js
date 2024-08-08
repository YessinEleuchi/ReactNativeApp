import AsyncStorage from "@react-native-async-storage/async-storage";
import ApiManager from "./ApiManager";

export const userLogin = async data => {
    try {
    const result = await ApiManager('/learner/login',{
        method: 'POST',
        body:{
            email: data.email,
            password: data.password
        },
        data: data
    })
    return result
    } catch (error) {
        return error.response.data
    }
}

export const CatalogLists = async data => {
    try {
    const result = await ApiManager('/listing',{
        method: 'GET',
        headers:{
            Authorization: `Bearer ${data.token}`,
            Type: 2
        },
        responseType: 'json',
    })
    return result
    } catch (error) {
        return error.response.data
    }
}

export const TokenVerif = async data => {
    try {
    const result = await ApiManager('/token',{
        method: 'GET',
        headers:{
            Authorization: `Bearer ${data.token}`
        },
    })
    return result
    } catch (error) {
        return error.response.data
    
}}

export const WordFav = async data => {
        try {
            const result = await ApiManager(`/word/${data.id}/favorite`,{
                method: 'PATCH',
                headers:{
                    Authorization: `Bearer ${data.token}`,
                    "Content-Type": "application/json",
                    Type: 2
                },
                data:{
                    "is_favorite": data.fav
                },
            })
            return result
            } catch (error) {
                return error.response.data
            }
}
export const checkFav = async data => {
    try {
        const result = await ApiManager(`/word/${data.id}/favorite`,{
            method: 'PATCH',
            headers:{
                Authorization: `Bearer ${data.token}`,
                "Content-Type": "application/json",
                Type: 2
            },
        })
        return result
        } catch (error) {
            return error.response.data
        }
}
export const Stats = async data => {
    try {
    const result = await ApiManager(`/learner/${data.id}/stat`,{
        method: 'GET',
        headers:{
            Authorization: `Bearer ${data.token}`
        },
    })
    return result
    } catch (error) {
        return error.response.data
    
}}
export const Forgotten = async data => {
    try {
    const result = await ApiManager('/leaner/forgotten',{
        method: 'POST',
        body:{
            email: data.email
        },
        data: data
    })
    return result
    } catch (error) {
        return error.response.data
    }
}
export const createList = async data => {
    try {
    const result = await ApiManager('/listing',{
        method: 'POST',
        headers:{
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "application/json",
            Type: 2
        },
        body:{
            name: data.name,
            type: data.type,
        },
        data: data
    })
    return result
    } catch (error) {
        return error.response.data
    }
}
export const addWord = async data => {
    try {
    const result = await ApiManager('/word',{
        method: 'POST',
        headers:{
            Authorization: `Bearer ${data.token}`,
            "Content-Type": "application/json",
            Type: 2
        },
        data:{
            "english": data.eng,
            "french": data.fr,
            "listing_id": data.id
        },
    }
    )
    return result
    } catch (error) {
        return error.response.data
    }
}