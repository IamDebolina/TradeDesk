# ---------- Stage 1: build the two React apps ----------
FROM node:22-alpine AS build
WORKDIR /app
ENV CI=false

COPY frontend/package*.json frontend/
RUN cd frontend && npm install

COPY dashboard/package*.json dashboard/
RUN cd dashboard && npm install

COPY frontend frontend
COPY dashboard dashboard
RUN cd frontend && npm run build
RUN cd dashboard && PUBLIC_URL=/dashboard npm run build

# ---------- Stage 2: run the backend ----------
FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY backend/package*.json backend/
RUN cd backend && npm install --omit=dev

COPY backend backend
COPY --from=build /app/frontend/build frontend/build
COPY --from=build /app/dashboard/build dashboard/build

EXPOSE 3002
CMD ["node", "backend/index.js"]