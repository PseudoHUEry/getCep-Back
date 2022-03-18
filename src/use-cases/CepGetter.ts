import senderMessage from "../util/senderMessage";
import moment from 'moment-timezone'
export default async ({ cep }: { cep: string }) => {
    const currentCep = cep.replace(/\D/g, '')
    const entity = await senderMessage(currentCep)

    const method = {
        "200": {
            status: entity.status,
            message: {
                data: moment().format('YYYY/MM/DD HH:mm'),
                andress: entity?.address,
                code: entity?.code,
                city: entity?.city,
                district: entity?.district
            }
        },
        "400": {
            status: entity.status,
            message: `${entity?.message} - ${entity?.statusText}`
        },
        "404": {
            status: entity.status,
            message: `${entity?.message} - ${entity?.statusText}`
        },
        "500": {
            status: entity.status,
            message: `${entity?.message} - ${entity?.statusText}`
        }
    }
    //@ts-ignore
    return method[`${entity.status}`]
}