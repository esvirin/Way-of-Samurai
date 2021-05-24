// -------------------- TYPING -------------------------

// Generic for response DATA
export type ResponseType<D> = {
    resultCode: ResultCodeEnum
    messages: string[]
    data: D
}

export type AuthLoginResponseDATAType = { userId: number }
export type AuthMeResponseDATAType = {
    id: number | null
    email: string | null
    login: string | null
}


export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaRequired = 10
}
