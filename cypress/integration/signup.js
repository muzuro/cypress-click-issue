describe('Signup test', function() {
    it('Test signup flow', function() {
        cy.visit('https://qurasense.com')
        cy.contains('Sign up for participation').click()
        cy.get('.btn-yes > material-ripple').click()
        cy.get('[ngcontrol=firstName] input').should('be.visible')
    })
})