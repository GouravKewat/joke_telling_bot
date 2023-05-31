import axios from "axios";

export async function getJoke() {
    const {data} = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random');
    return data[0];
}