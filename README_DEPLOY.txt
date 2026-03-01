ТРАНЗИТ — PWA (готово к деплою)

Файлы:
- index.html
- sw.js
- manifest.webmanifest
- icon-192.png, icon-512.png

Как задеплоить на GitHub Pages (постоянная ссылка):
1) Создайте репозиторий, например: tranzit-pwa
2) Загрузите все файлы из этой папки в корень репозитория
3) В настройках репозитория включите Pages: Deploy from a branch → main / root
4) Ваша ссылка будет: https://<ваш_логин>.github.io/tranzit-pwa/
5) (Опционально) Подключите свой домен (например, tranzit.kz) через DNS (CNAME).

Vercel / Netlify / Cloudflare Pages:
- Просто загрузите папку как статический сайт, базовый каталог: / (root). Build не нужен.

Важно:
- HTTPS обязателен для PWA и для работы WhatsApp deeplink.
- Файл sw.js должен лежать в корне вместе с index.html.