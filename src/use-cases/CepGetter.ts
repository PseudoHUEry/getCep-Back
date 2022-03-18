import senderMessage from "../util/senderMessage";

export default async ({ cep }: { cep: string }) => {
    const currentCep = cep.replace(/\D/g, '')
    const entity = await senderMessage(currentCep)

    const method = {
        "200": {
            status: entity.status,
            message: {
                address: entity?.address,
                code: entity?.code,
                city: entity?.city,
                district: entity?.district,
                state: entity?.state

            }
        },
        "400": {
            status: entity.status,
            message: `${entity?.message}`
        },
        "404": {
            status: entity.status,
            message: `${entity?.message}`
        },
        "500": {
            status: entity.status,
            message: `${entity?.message}`
        }
    }
    //@ts-ignore
    return method[`${entity.status}`]
}