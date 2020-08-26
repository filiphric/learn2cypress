/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  cy
    .route('/api/boards')
    .as('boardList')

  cy
    .visit('/');

});

it('zoznam dvoch boardov z fixture', () => {

  // použi súbor twoBoards.json z fixtures foldra. do tohto it() bloku nemusíš nič písať. stačí, že zmeníš .route() príkaz v beforeEach bloku

})

it('zoznam boardov s hviezdickou z fixture', () => {

  // ak sa Ti podarilo splniť predošlú úlohu, stačí si vyfiltrovať tento test a zmeniť dáta v súbore twoBoards.json po uložení testu a súboru twoBoards.json by si mal/a vidieť správny výsledok

})

it('chyba pri vytvoreni tasku', () => {

  // pridaj si ďalší .route() príkaz, ktorým si odchytíš api volanie, ktoré sa robí pri vytvorení tasku. nahraď odpoveď tak, aby zo servra prišiel chybový status kód. dôležitá poznámka: pri nahradzovaní odpovede je parameter „response“ povinný

})