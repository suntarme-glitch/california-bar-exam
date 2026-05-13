# California Bar Exam Track

Персональный образовательный трек для подготовки к California Bar Exam: русскоязычные объяснения, английская юридическая терминология, интерактивные вопросы в стиле Bar Exam, заметки по урокам, отметки прогресса и опциональная синхронизация через GitHub Gist.

Проект задуман как 100-урочный путь от основ common law до экзаменационной стратегии. Текущее состояние контента: 52 реализованных урока по 13 предметам.

Live site: https://suntarme-glitch.github.io/california-bar-exam/

## Что внутри

- Статический PWA без сборки и серверного backend.
- Учебный dashboard с предметами, прогрессом и навигацией по урокам.
- Контент уроков в `data.js`: русские объяснения, английские термины, таблицы, timelines, IRAC/Bar-style examples.
- Локальный прогресс в `localStorage`.
- Персональные заметки по каждому уроку.
- Опциональная синхронизация прогресса и заметок через private GitHub Gist.
- Service worker с network-first стратегией, чтобы сайт не зависал на старом кэше.

## Учебные блоки

| Предмет | Уроков сейчас |
| --- | ---: |
| История и система | 8 |
| Contracts | 8 |
| Torts | 5 |
| Constitutional Law | 3 |
| Criminal Law | 3 |
| Real Property | 3 |
| Evidence | 2 |
| Civil Procedure | 2 |
| Wills & Trusts | 2 |
| Professional Responsibility | 2 |
| Community Property | 1 |
| Immigration: Asylum & Refugees | 8 |
| Bar Exam Prep | 5 |

Всего: 52 урока. Целевой объем: 100 уроков.

## Быстрый запуск

Проект можно открыть как обычный статический сайт. Для корректной проверки service worker лучше запускать через локальный HTTP-сервер:

```bash
python3 -m http.server 8000
```

После запуска:

```text
http://localhost:8000/
```

Для простой проверки без PWA-возможностей можно открыть `index.html` напрямую, но синхронизация, manifest и service worker лучше тестируются через HTTP.

## Структура проекта

```text
.
├── index.html          # UI, стили, навигация, progress/notes/sync logic
├── data.js             # SUBJECTS: предметы и HTML-контент уроков
├── manifest.json       # PWA manifest для установки на устройство
├── sw.js               # Service worker: cache cleanup, network-first, offline fallback
├── icons/              # PWA icons
└── docs/
    ├── TECHNICAL.md    # Архитектура, хранение данных, deployment, QA
    └── CODE_REVIEW.md  # Ревизия кода и найденные/исправленные риски
```

## Синхронизация через GitHub Gist

По умолчанию прогресс и заметки хранятся только в браузере. Для синхронизации между устройствами нужно открыть "Настройки синхронизации" в sidebar и указать GitHub Personal Access Token с правом `gist`.

Файл в Gist называется `bar_exam_progress.json` и хранит payload версии 2:

```json
{
  "__v": 2,
  "progress": {},
  "notes": {}
}
```

Токен хранится в `localStorage` текущего браузера. Это удобно для личного учебного инструмента, но не подходит для публичного shared-device сценария.

## GitHub Pages

Проект рассчитан на публикацию из корня ветки `main` через GitHub Pages:

```text
https://suntarme-glitch.github.io/california-bar-exam/
```

Так как сайт живет в подпапке GitHub Pages, `manifest.json` использует относительные `start_url` и `scope`. Если установленная PWA или мобильный браузер застряли на старом service worker, открой:

```text
https://suntarme-glitch.github.io/california-bar-exam/?reset=1
```

Это удалит старые service worker registrations и cache storage, затем перезагрузит страницу.

## Документация

- [Technical Documentation](docs/TECHNICAL.md)
- [Code Review](docs/CODE_REVIEW.md)

## Текущий статус

Сайт работает как standalone учебное приложение. Основные технические риски на момент ревизии были связаны не с контентом, а с PWA/cache behavior на GitHub Pages и с автосинхронизацией Gist. Эти риски исправлены в текущей версии.

Следующий содержательный этап: довести curriculum с 52 до 100 уроков и отдельно провести правовую редактуру контента по актуальным требованиям California Bar Exam.
