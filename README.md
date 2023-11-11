# MISIS_IWCD, Генерация продающих текстов

## Описание проекта
Приветствуем в репозитории проекта нашей команды, разработанный в рамках ЛЦТ. Наша команда реализовала веб-интерфейс, в котором можно проанализировать поступающие заявления через чат-бота, отследить работу разработанной модели и разметить данные для дообучения модели.

## Стек
Backend — Java, SpringBoot
DB — PostgeSQL
Frontend — Javascript, React.js
ML — Python

## Как начать работу

### Локальное развертывание
Чтобы локально нужно:
1. Ввести в консоль 
```
git clone https://github.com/itatmisis/misis_iwcd.git
```
2. Загрузить модели машинного обучения по данной [ссылке](https://drive.google.com/drive/folders/1smXcT4-RUJ2KZnRSBb66snQMQmmmmZ3l?usp=sharing)
3. Разархивировать загруженные модели
4. Папку 'gazprom_model' переместить по пути misis_iwcd/ML/model/app
5. Перейти в корневую папку misis_iwcd
6. Ввести в консоль
```
# Linux/Windows
docker-compose up -d

# MacOS
docker compose up -d
```

### Веб-сайт
Протестировать наш сервис без локального развертывания можно по данной [ссылке]()
