FROM node:19-alpine AS frontend

RUN apk add git

RUN git clone -b frontend https://github.com/Dev0psProject/GAN-Skin-Disease-Identifier-fe.git app

WORKDIR /app

RUN npm install

RUN npm run build

FROM python:3.9-slim AS backend

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["flask", "run", "--host", "0.0.0.0"]

FROM nginx:1.21-alpine AS production

COPY --from=frontend /app/dist /usr/share/nginx/html

COPY --from=backend /app/dist /usr/share/nginx/html

RUN ls -latr /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]