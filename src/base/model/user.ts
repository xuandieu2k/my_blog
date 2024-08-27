export default class User {
    id: number = 0
    name: string = ''
    birthday: string = ''
    gender: string = ''
    role: string = ''
    constructor(data?: Partial<User>) {
        Object.assign(this, data)
    }

}