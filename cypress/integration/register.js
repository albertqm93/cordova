it('Register an user', () => {

    cy.visit('http://localhost:3000/register') 

    cy.get('#user')
        .type('cypress10')
        .should('have.value', 'cypress10')

    cy.get('#password')
        .type('cypresstest')
        .should('have.value', 'cypresstest')

    cy.get('#email')
        .type('cypress@test.com')
        .should('have.value', 'cypress@test.com')

    cy.get('#name')
        .type('cypress')
        .should('have.value', 'cypress')

    cy.get('#lastName')
        .type('testing')
        .should('have.value', 'testing')

    cy.get('#telephone')
        .type('666111222')
        .should('have.value', '666111222')

    cy.get('#rol').click()
    cy.get('#cliente').click()

    cy.get('#buttonRegister').click()
    cy.location().should((loc) => {
        expect(loc.host).to.eq('localhost:3000')
    })
})
