import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Coment from 'App/Models/Coment'
import Moment from 'App/Models/Moment'

export default class CommentsController {
    public async store({request, params, response}: HttpContextContract) {
        const body = request.body()
        const momentId = params.momentId

        await Moment.findOrFail(momentId)

        body.momentId = momentId

        const comment = await Coment.create(body)

        response.status(201)

        return {
            message: "COmentário adicionado com sucesso",
            data: comment
        }
    }
}
