# Learn2code: Cypress
Repozitár ku kurzu Learn2code na tému test automation pomocou Cypress.io

## O autorovi
Volám sa Filip. Som QA lead vo firme [Slido](https://www.sli.do/) a [Cypress ambasádor](https://cypress.io/ambassadors/)

## Čo sa nachádza v repozitári
Súčasťou repozitára je aplikácia a všetky učebné materiály ku kurzu. Väčšina kapitol kurzu začína súborom `zaciatok.js` alebo `zaciatok.ts`, ktoré je opísané vo videu. Počas videa môžeš písať kód spoločne so mnou. Konečný stav kódu je uložený v súbore `zaver.js` alebo `zaver.ts`. Väčšina kapitol taktiež obsahuje súbor `zoznamsa.js` alebo `zoznamsa.ts`, v ktorom je možné vyskúšať si koncepty popísané vo videu. Riešenie úloh je vždy popísané vo videu.

## Trello app
Aplikácia je kópiou aplikácie Trello. V aplikácii možno vytvárať boardy a zoznamy úloh. Medzi boardami je možné úlohy presúvať meniť ich stav, nastaviť im deadline či dokonca uploadnúť obrázok.

### Inštalácia
Inštalácia je jednoduchá, stačí zadať príkaz
1. `npm install`
2. `npm start`
3. A otvoriť aplikáciu v prehliadači na lokalite http://localhost:3000

### Backend
Backend je obyčajný json súbor, nachádzajúci sa v `trelloapp/public/data/data.json`. Uploadované súbory sa ukladajú do foldra `trelloapp/public/images`.

### API
---
#### POST /reset
Odstráni všetky boardy, listy, tasky a userov

---
#### DELETE /boards
Odstráni všetky boardy, zoznamy a tasky

---
#### DELETE /lists
Odstráni všetky zoznamy a tasky

---
#### DELETE /tasks
Odstráni všetky tasky

---
#### DELETE /users
Odstráni všetkých userov