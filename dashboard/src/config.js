const isProd = process.env.NODE_ENV === "production";

export const BACKEND_URL = isProd ? "" : "http://localhost:3002";
export const LOGIN_URL = isProd ? "/login" : "http://localhost:3000/login";