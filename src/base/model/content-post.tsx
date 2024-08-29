import { TYPE_CONTENT_COMPONENT } from "../constants/app-constants"

export default class ContentPost {
    id: number = 0
    content: string = ''
    type: number = TYPE_CONTENT_COMPONENT.TEXT
    url: string = ''

    constructor(data?: Partial<ContentPost>) {
        Object.assign(this, data)
    }
}