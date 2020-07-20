declare namespace Cypress {
  interface Chainable {
   
    /*
     * adds a new task to list
    */
    addTask(name: string): Chainable<Element>

}