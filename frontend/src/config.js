const isProd = process.env.NODE_ENV === "production";

export const BACKEND_URL = isProd ? "" : "http://localhost:3002";
export const DASHBOARD_URL = isProd ? "/dashboard" : "http://localhost:3001";