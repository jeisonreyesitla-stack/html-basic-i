FROM node:22-slim

USER root

# 1. Instalar dependencias del sistema
RUN apt-get update -qq && \
    apt-get install -y chromium libnss3 curl && \
    rm -rf /var/lib/apt/lists/*

# 3. Volver al usuario normal del contenedor
USER root