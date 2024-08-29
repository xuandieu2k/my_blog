import Category from "./category"
import ContentPost from "./content-post"
import User from "./user"

export default class Post {
    id: number = 0
    title: string = ''
    poster: string = ''
    user_post: User = new User()
    content_posts: ContentPost[] = []
    categories: Category[] = []

    constructor(data?: Partial<Post>) {
        Object.assign(this, data)
    }
}
