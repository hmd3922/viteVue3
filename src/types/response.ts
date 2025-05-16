// src/types/response.ts
export interface ApiResponse<T = any> {
    code: number
    message: string
    data: T
  }