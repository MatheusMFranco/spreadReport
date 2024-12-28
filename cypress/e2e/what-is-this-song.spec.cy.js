/* eslint-disable no-undef */
describe('What is this Song Site', () => {

  beforeEach(() => {
    cy.visit('https://what-is-this-song.vercel.app');
  });

  it('should display a title ', () => {
    cy.get('home-page')
      .shadow()
      .find('h1')
      .should('have.text', 'TURN YOUR MIC ON AND SAY THE SONG NAME');
  });

});
