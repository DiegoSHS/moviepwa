import axios from "axios";

const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWQyZmVmMzgzZDVjNzJiM2Y2MGU1MDlmNDYzZGJiNCIsIm5iZiI6MTczNDQ1ODc5MS4zODQsInN1YiI6IjY3NjFiZGE3Nzg0M2RmYThiMTc4YWJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rQ84IZPqBTzXXQShEck3PiYAl-V-2cAErXjZD7X0ro4"

export const API_URL = 'https://api.themoviedb.org/3/'

export const IMAGE_URL = 'https://image.tmdb.org/t/p'

export const ApiClient = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})