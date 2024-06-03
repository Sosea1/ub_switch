import axios, { AxiosError, AxiosResponse } from 'axios';

export async function login(username: string, password: string) : Promise<string> {
    try {
      const response = await axios.get<string>('/login', {params: {username:username, password:password}})
      return response.data
    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(err.toJSON())
        }
        return ""
    }
  }

  export async function register(entry: Login) : Promise<string> {
    try {
      const response = await axios.post<string>('/register', entry)
      return response.data
    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(err.toJSON())
        }
        return ""
    }
  }