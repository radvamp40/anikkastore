import Cookies from "js-cookie"

const ACCESS_TOKEN_KEY = "accessToken"
const REFRESH_TOKEN_KEY = "refreshToken"

/**
 * Save access + refresh tokens in cookies
 */
export const setTokens = (accessToken: string, refreshToken: string): void => {
    Cookies.set(ACCESS_TOKEN_KEY, accessToken)
    Cookies.set(REFRESH_TOKEN_KEY, refreshToken)
}

/**
 * Get access token from cookies
 */
export const getAccessToken = () => Cookies.get(ACCESS_TOKEN_KEY)

/**
 * Get refresh token from cookies
 */
export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN_KEY)

/**
 * Clear tokens from cookies
 */
export const clearTokens = () => {
    Cookies.remove(ACCESS_TOKEN_KEY)
    Cookies.remove(REFRESH_TOKEN_KEY)
}