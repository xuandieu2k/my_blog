import User from "./user"

export default class Post {
    id: number = 0
    title: string = ''
    poster: string = ''
    user_post: User = new User()

    constructor(data?: Partial<Post>) {
        Object.assign(this, data)
    }
}