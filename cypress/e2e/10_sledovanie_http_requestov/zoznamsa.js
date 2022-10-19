/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit(); // doplň si adresu svojho boardu

});

it('vytvorenie tasku', () => {

  // vytvor si v teste nový task v zozname a odsleduj si request, ktorý sa udeje pri jeho vytvorení. pomocou príkazov .its() a .should() si otestuj status alebo telo odpovede requestu

})

it('odstránenie zoznamu', () => {

  // manuálne si vytvor nový zoznam a pomocou testu tento zoznam odstráň. následne si odsleduj request, ktorý sa volá pri odstránení zoznamu

})

it('zaskrtnutie tasku', () => {

  // pomocou testu si zaškrtni task v zozname a odsleduj si request, ktorý sa pri tejto akcii odpaľuje. skús si vytvoriť aj zopár testov pre tento request. skús na overenie spoužiť príkaz .then() skontroluj napríklad status kód a telo requestu

})