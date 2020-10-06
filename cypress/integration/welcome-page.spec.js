describe('Welcome Page', () => {

    beforeEach(() => {
        cy.viewport(1440, 900);
        cy.visit('localhost:8000');
    });

    it('should display navbar', () => {
       cy.get('[data-cy="navbar"]')
           .should('be.visible');

       cy.get('.navbar-item').should('have.length', 3);
       cy.get('.navbar-item').eq(0).should('have.attr', 'href', '/').contains('Strona główna');
       cy.get('.navbar-item').eq(1).should('have.attr', 'href', '/blog').contains('Blog');
       cy.get('.navbar-item').eq(2).should('have.attr', 'href', '/about').contains('O mnie');
    });

    it('should handle internal routing', () => {
        cy.get('.navbar-item').eq(1).click();
        cy.location((loc) => {
            expect(loc.href).to.eq('localhost:8000/blog');
        });

        cy.get('.navbar-item').eq(2).click();
        cy.location((loc) => {
            expect(loc.href).to.eq('localhost:8000/about');
        });

        cy.get('.navbar-item').eq(0).click();
        cy.location((loc) => {
            expect(loc.href).to.eq('localhost:8000');
        });
    });

    it('should display social media', () => {
        cy.get('[data-cy="socialMedia__linkedin')
            .should('be.visible')
            .should('have.attr', 'href', 'https://www.linkedin.com/in/marcin-madej-8861bb118/');

        cy.get('[data-cy="socialMedia__twitter')
            .should('be.visible')
            .should('have.attr', 'href', 'https://twitter.com/mejdej93');

        cy.get('[data-cy="socialMedia__github')
            .should('be.visible')
            .should('have.attr', 'href', 'https://github.com/mejdej93');

        cy.get('[data-cy="socialMedia__codepen')
            .should('be.visible')
            .should('have.attr', 'href', 'https://codepen.io/mejdej93');
    });
});
