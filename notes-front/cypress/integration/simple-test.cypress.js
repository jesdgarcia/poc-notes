describe('POC Notes Testing', function () {
    it('Front page can be opened', function () {
        cy.visit('/')
        cy.contains('Notes')
    })

    it('User can add new note', function () {
        cy.get('input[name="userName"]').type('jesus.garcia')
        cy.get('input[name="text"]').type('Nueva Nota')
        cy.get('#btnSaveNote').click()
        cy.get('li').first().contains('Nueva Nota')
    })

    it('User can delete note', function () {
        cy.get('li').first().find('button').click()
        cy.get('li').first().not('Nueva Nota')
    })
})