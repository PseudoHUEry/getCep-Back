import 'dotenv/config'
export default {
    PORT: process.env.PORT ?? "3000",
    urlApi: process.env.API_URL
}