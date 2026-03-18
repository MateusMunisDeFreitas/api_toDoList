# Estágio 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Estágio 2: Runtime
FROM node:20-alpine

WORKDIR /app

# Copiar as dependências do estágio anterior
COPY --from=builder /app/node_modules ./node_modules

# Copiar código fonte
COPY . .

# Expor porta (ajuste conforme necessário)
EXPOSE 3000

# Definir variáveis de ambiente padrão
ENV NODE_ENV=production
ENV PORT=3000

# Rodar aplicação
CMD ["node", "app.js"]
