import axios from "axios";
import { API_KEY } from "./config";

const MAIN_URL = 'https://api.themoviedb.org/3';

export async function getTrending(page = 1) {
    const url = `${MAIN_URL}/trending/all/day/?api_key=${API_KEY}&language=en-US&page=${page}`;
    try {
        const response = await axios.get(url);
        if (response.status !== 200) {
            throw new Error(response.status);
        }
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
