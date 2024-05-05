import axios, { AxiosError, AxiosResponse } from 'axios';


export const addStaticPS = async (entry: PostPSStatic) => {
    try {
      const response = await axios.post('/port-security/add-static', entry)
      return response.data
    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(err.toJSON())
        }
    }
  }


export async function viewPS() : Promise<GetPS[]> {
    try {
      const response = await axios.get<GetPS[]>('/port-security/view')
      console.log(response.data)
      return response.data
    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(err.toJSON())
        }
        return []
    }
  }