import { IncomingHttpHeaders } from "http";

export interface Context {
    ip: string
    request: ContextRequest,
    hrStart: [number, number]
}

export interface ContextRequest {
    version: number
    id: string
    name: string
    args: any
    headers: IncomingHttpHeaders
    deviceInfo: {
        id: string
        type: string
        platform: any
        version: string | null
        language: string | null
        timezone: string | null
    }
    extra: {
        [name: string]: any
    }
}

export interface ContextReply {
    result?: any,
    error?: {
        type: string,
        message: string
    }
}

        // id: string
        // name: string
        // args: any
        // executionId: string
        // running: boolean
        // device: DBDevice
        // date: Date
        // duration: number
        // host: string
        // ok: boolean
        // result: any
        // error: { type: string, message: string } | null