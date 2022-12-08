import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {

    async getProfile(creatorId) {
        const res = await api.get('api/profiles/' + creatorId)
        logger.log(res.data)
    }
}

export const profilesService = new ProfilesService()