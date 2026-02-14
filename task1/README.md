# Lab 5.1 - TypeScript & Props Validation

## Описание

React приложение с типизированными компонентами UserCard и SkillList.

## Типы и Интерфейсы

- **User** - интерфейс для данных пользователя (name, email, age)
- **SkillLevel** - union type ('Beginner' | 'Intermediate' | 'Expert')
- **Skill** - интерфейс для навыков (id, name, level)
- **UserCardProps** - пропсы для UserCard (user, isActive?, children)
- **SkillListProps** - пропсы для SkillList (skills)

## Запуск

```bash
cd Lab_05/task1
npm install
npm run dev
```

Откройте http://localhost:5173
