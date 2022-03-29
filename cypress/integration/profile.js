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

it('Update Profile', () => {
    cy.visit('http://localhost:3000/profile') 
    cy.get('#name')
        .type('cypressChange')
        .should('have.value', 'cypressChange')
    
    cy.get('#lastName')
        .type('testingChange')
        .should('have.value', 'testingChange')

    cy.get('#telephone')
        .type('666222111')
        .should('have.value', '666222111')
    cy.get('#buttonSave').click()
})

it('Delete Account', () => {
    cy.visit('http://localhost:3000/profile') 

    cy.get('#buttonDelete').click()
    
    cy.location().should((loc) => {
        expect(loc.host).to.eq('localhost:3000')
    })
})