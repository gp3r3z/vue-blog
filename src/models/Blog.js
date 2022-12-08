
export class Blog {
    constructor(data) {
        this.body = data.body
        this.creatorId = data.creatorId
        this.id = data.id
        this.creatorImage = data.creator.picture
        this.imgUrl = data.imgUrl
        this.title = data.title
    }
}