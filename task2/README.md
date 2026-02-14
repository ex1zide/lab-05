# Lab 5.2 - Typing State & Event Handlers

## Описание

React приложение с поиском пользователей. Демонстрирует типизированное состояние и обработчики событий.

## Типы

- **User** - интерфейс пользователя (name, email, age)
- **useState<User[]>** - generic для типизации массива
- **React.ChangeEvent<HTMLInputElement>** - типизированный onChange
- **React.MouseEvent<HTMLButtonElement>** - типизированный onClick

## Почему React.ChangeEvent вместо any

React.ChangeEvent дает доступ к event.target.value с проверкой типов на этапе компиляции. any отключает все проверки типов.

## Когда нужны explicit generics

- useState<User[]>([]) - нужен generic, TS не может вывести тип из пустого массива
- useState('') - не нужен, TS выводит string из начального значения

## Запуск

```bash
cd Lab_05/task2
npm install
npm run dev
```

Откройте http://localhost:5173
