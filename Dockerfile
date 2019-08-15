FROM node:8

ARG APP_DIR=/home/node/app

RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}
RUN npm install -g jest

#RUN mkdir -p /home/node/app/node_modules
# Установка зависимостей
COPY package*.json ./


RUN npm install
# Для использования в продакшне
# RUN npm install --production

# Копирование файлов проекта
COPY . .

# Уведомление о порте, который будет прослушивать работающее приложение
EXPOSE 3000

# Запуск проекта
CMD ["npm", "start"]