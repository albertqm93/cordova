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

it('Add product Home', () => {
    cy.get('#addProduct').click()

    cy.get('#product')
        .type('Moto')
        .should('have.value', 'Moto')

    cy.get('#detail')
        .type('de agua')
        .should('have.value', 'de agua')

    cy.get('#price')
        .type('500')
        .should('have.value', '500')

    cy.get('#stock')
        .type(1)
        .should('have.value', '1')

    cy.get('#createProduct').click()

})

