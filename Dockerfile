# Stage 1: Build
FROM node:20-alpine AS builder

# Arbeitsverzeichnis im Container
WORKDIR /app

# package.json und package-lock.json kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Projektdateien kopieren
COPY . .

# Projekt bauen
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Nur benötigte Dateien kopieren
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Abhängigkeiten installieren (nur production)
RUN npm install --omit=dev

# Port freigeben
EXPOSE 3000

# Startbefehl
CMD ["npm", "start"]
