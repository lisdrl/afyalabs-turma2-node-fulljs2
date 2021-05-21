//Armazena a chamada da API:
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/' //Manter a / para quando precisar colocar a continuidade do link
});

export const postform = axios.create({
    baseURL: 'https://webhook.site/d090ff94-317b-4f37-83d2-4460fc03e243' 
});