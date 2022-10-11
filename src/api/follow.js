import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function checkFollowApi(idUser) {
    const url = `${API_HOST}/consultaRelacion?id=${idUser}`;

    const params = {
        headers: {
            Authorization: `Bearer ${getTokenApi()}`
        }
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err;
        })
}