it('Login', () => {

    cy.visit('http://localhost:3000/login') 

    cy.get('#email')
        .type('cypress@test.com')
        .should('have.value', 'cypress@test.com')

    cy.get('#password')
        .type('cypresstest')
        .should('have.value', 'cypresstest')
    cy.get('#buttonLogin').click()

    cy.location().should((loc) => {
        expect(loc.host).to.eq('localhost:3000')
    })

})