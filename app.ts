import server from './src/config/www'
import moment from 'moment-timezone'

(()=>{
    moment.tz.setDefault('America/Sao_Paulo')
    server()
})()