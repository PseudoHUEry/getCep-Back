import axios from 'axios'
import env from '../env/envFile'
import { ApiResponse } from './type'

export default async (cep: string) => {
    const url = env.urlApi + cep
    const { data: result }: { data: ApiResponse } = await axios(url)
    return result
}