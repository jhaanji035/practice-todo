// import React from 'react'
// import { YoutubeForm }  from '../../src/component/YoutubeForm'
// import  mount from 'cypress-react-unit-test';
describe("Practice Todo Application", ()=>{
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })

    it('Mounting component youtube', ()=> {
        cy.get('[data-test=username]').type("Pankaj")
        cy.get('[data-testid="email"]').type("panks.35@gmail.com")
        cy.get('[data-testid="password"]').type("Admin")
        cy.get('form').submit() // Submit a form
    })

})