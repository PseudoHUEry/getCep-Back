import 'dotenv/config'
export default {
    PORT: process.env.PORT ?? "3001",
    urlApi: process.env.API_URL
}