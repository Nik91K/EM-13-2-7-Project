export type UserType = {
    id: number,
    email: string,
    password: string,
    token: string,
}

export type TokenType = {
    token: string,
    expiredTime: number,
}
