export default class Category {
    id: number = 0

    name: string = ''

    is_selected: boolean = false

    constructor(data?: Partial<Category>) {
        Object.assign(this, data)
    }
    

}