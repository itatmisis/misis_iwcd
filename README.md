# MISIS_IWCD, Генерация продающих текстов

## Описание проекта

Приветствуем в репозитории проекта нашей команды, разработанный в рамках ЛЦТ. Наша команда реализовала веб-интерфейс, в котором можно проанализировать поступающие заявления через чат-бота, отследить работу разработанной модели и разметить данные для дообучения модели.

## Стек

Backend — `Java`, `SpringBoot`
DB — `PostgeSQL`
Frontend — `Javascript`, `React.js`
ML — `Python`

## Как начать работу

### Локальное развертывание (Production)

Чтобы локально нужно:

1. Клонировать репозиторий с помощью команды

    ```bash
        git clone https://github.com/itatmisis/misis_iwcd.git
    ```

2. Загрузить модели машинного обучения по данной [ссылке](https://drive.google.com/drive/folders/1smXcT4-RUJ2KZnRSBb66snQMQmmmmZ3l?usp=sharing)
3. Разархивировать загруженные модели
4. Папку 'gazprom_model' переместить по пути misis_iwcd/ML/model/app
5. Перейти в корневую папку misis_iwcd
6. Скопировать файл `.env.example` в `.env` и заполнить переменные окружения

    ```bash
        make env
        vi .env
    ```

7. Ввести в консоль команду

    ```bash
        make run
    ```

    Если на вашей машине нет GNU Make, то воспользуйтесь следующей командой

    ```bash
        docker compose up -d
    ```

    Если команда не работает, у вас более старая версия Docker. Попробуйте следующее:

    ```bash
        docker-compose up -d
    ```

8. Посмотреть на наш [frontend](http://localhost:8000) и [backend (Swagger UI)](http://localhost:8001/swagger-ui.html)

#### Development Docker Compose файл

Чтобы запустить сервисы с пробросом всех портов, выполните следующую команду:

```bash
    make run-dev
```

Если на вашей машине нет GNU Make, то воспользуйтесь следующей командой:

```bash
    docker-compose -f docker-compose.dev.yml up -d
```

Порт-маппинги можно найти в файле `docker-compose.dev.yml`.

#### Отключение всех сервисов

Чтобы отключить все сервисы на вашей локальной машине, выполните следующую команду:

```bash
    make down
```

Если на вашей машине нет GNU Make, то воспользуйтесь следующей командой:

```bash
    docker-compose -f docker-compose.yml down && \
    docker-compose -f docker-compose.dev.yml down
```

## Веб-сайт

Протестировать наш сервис без локального развертывания можно по данной [ссылке](TODO)
