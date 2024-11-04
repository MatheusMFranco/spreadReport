/* eslint-disable no-undef */
describe('Best Practices Site', () => {

  beforeEach(() => {
    cy.visit('https://best-practices-psi.vercel.app');
  });

  it('should display the article with correct class name', () => {
    cy.get('article').should('have.class', 'quote');
  });

  it('should display the image with correct alt text and src', () => {
    cy.get('.quote-media img').should('have.attr', 'alt', 'Zeitgeist')
  });

  it('should display the quote message', () => {
    cy.get('.quote-box .quote-message').should('exist');
  });

  it('should display the quote author', () => {
    cy.get('.quote-author').should('contain', 'Unknown');
  });

});
