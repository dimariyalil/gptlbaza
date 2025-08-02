# CI/CD Pipeline для lbazaG

## 🚀 Обзор

Система непрерывной интеграции и развертывания (CI/CD) для платформы **lbazaG** автоматически проверяет качество кода, запускает тесты и обеспечивает стабильность разработки при каждом изменении в репозитории.

## 📋 Этапы CI Pipeline

### 1. Code Quality & Testing
Основной этап проверки качества кода:

| Этап | Инструмент | Назначение |
|------|------------|------------|
| **Форматирование** | Black | Автоматическая проверка стиля кода |
| **Линтинг** | Ruff | Статический анализ и поиск ошибок |
| **Типизация** | MyPy | Проверка типов Python |
| **Тестирование** | Pytest | Запуск unit-тестов с покрытием |

### 2. Security Analysis
Проверка безопасности кода:

| Инструмент | Назначение |
|------------|------------|
| **Bandit** | Сканирование уязвимостей в Python коде |
| **Pip-audit** | Проверка зависимостей на известные уязвимости |

### 3. Build Verification
Проверка сборки пакета:

| Действие | Назначение |
|----------|------------|
| **Poetry Build** | Создание пакета lbazaG |
| **Artifact Check** | Проверка целостности собранного пакета |

## ⚙️ Конфигурация

### Триггеры запуска
CI pipeline автоматически запускается при:
- Push в ветки `main` и `develop`
- Создании Pull Request в ветки `main` и `develop`

### Окружение
- **Python версия**: 3.11
- **Poetry версия**: 1.8.0
- **ОС**: Ubuntu Latest

## 📊 Статус проверок

[![lbazaG CI Pipeline](https://github.com/dimariyalil/gptlbaza/actions/workflows/ci.yml/badge.svg)](https://github.com/dimariyalil/gptlbaza/actions/workflows/ci.yml)

### Проверки качества кода

```bash
# Форматирование кода (Black)
poetry run black --check --diff .

# Линтинг (Ruff)
poetry run ruff check . --output-format=github

# Проверка типов (MyPy)
poetry run mypy apps/lbazag --ignore-missing-imports

# Тестирование (Pytest)
poetry run pytest tests/ -v --tb=short
```

## 🏗️ Структура проекта для CI

```
lbazaG/
├── .github/workflows/
│   ├── ci.yml              # CI pipeline конфигурация
│   └── deploy.yml          # Deployment pipeline
├── apps/
│   └── lbazag/            # Основной код приложения
│       ├── __init__.py
│       ├── main.py        # FastAPI приложение
│       └── py.typed       # Маркер типизации
├── tests/
│   └── test_main.py       # Unit-тесты
├── docs/
│   └── ci.md              # Этот файл
├── pyproject.toml         # Конфигурация проекта и зависимостей
└── README.md
```

## 🔧 Локальная разработка

### Установка зависимостей
```bash
# Установка Poetry (если не установлен)
curl -sSL https://install.python-poetry.org | python3 -

# Установка зависимостей lbazaG
poetry install
```

### Запуск проверок локально
```bash
# Форматирование кода
poetry run black .

# Линтинг
poetry run ruff check . --fix

# Проверка типов
poetry run mypy apps/lbazag

# Запуск тестов
poetry run pytest tests/ -v

# Запуск с покрытием
poetry run pytest tests/ --cov=lbazag --cov-report=html
```

## 📝 Правила разработки

### Pre-commit проверки
Перед каждым коммитом рекомендуется:

1. **Форматировать код**: `poetry run black .`
2. **Исправить линтинг**: `poetry run ruff check . --fix`
3. **Запустить тесты**: `poetry run pytest`
4. **Проверить типы**: `poetry run mypy apps/lbazag`

### Стандарты кода lbazaG

| Аспект | Стандарт |
|--------|----------|
| **Длина строки** | 88 символов (Black) |
| **Стиль импортов** | isort через Ruff |
| **Документация** | Google-style docstrings |
| **Типизация** | Обязательна для публичных функций |
| **Тесты** | Покрытие > 80% |

## 🚨 Troubleshooting

### Частые проблемы

#### Ошибка форматирования
```bash
# Автоматическое исправление
poetry run black .
```

#### Ошибки линтинга
```bash
# Автоматическое исправление
poetry run ruff check . --fix

# Просмотр конкретных ошибок
poetry run ruff check . --output-format=full
```

#### Падение тестов
```bash
# Запуск с подробным выводом
poetry run pytest tests/ -v -s

# Запуск конкретного теста
poetry run pytest tests/test_main.py::test_placeholder -v
```

## 🔗 Ссылки

- **GitHub Actions**: [Workflow файл](/.github/workflows/ci.yml)
- **Poetry**: [Конфигурация проекта](/pyproject.toml)
- **Ruff**: [Официальная документация](https://docs.astral.sh/ruff/)
- **Black**: [Официальная документация](https://black.readthedocs.io/)
- **Pytest**: [Официальная документация](https://docs.pytest.org/)

## 🎯 Roadmap

### Планируемые улучшения
- [ ] Интеграция с SonarQube для анализа качества кода
- [ ] Автоматическое обновление зависимостей с Dependabot
- [ ] Performance тестирование с locust
- [ ] Integration тестирование с Docker Compose
- [ ] Автоматический деплой в staging окружение

---

**lbazaG Platform** - Local AI Platform for iGaming Industry  
© 2024 lbazaG Team