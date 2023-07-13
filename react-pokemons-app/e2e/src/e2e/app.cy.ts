describe('react-pokemons-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    //cy.login('my-email@something.com', 'myPassword');

    cy.get('h1.center').contains('Pokédex');
    cy.get('.card-content p').first().contains('Bulbizarre');
    // Function helper example, see `../support/app.po.ts` file
    // getGreeting().contains('Welcome react-pokemons-app');
  });


  it('should show data from backend', () => {
    cy.intercept({
      method: 'GET',
      url: '**/pokemons',
    }, {
      statusCode: 200,
      body: [{ name: 'Toto'}],
      headers: { 'access-control-allow-origin': '*' },
      delayMs: 0,
    }).as('getPokemons')

    cy.wait('@getPokemons');

    cy.get('.card-content p').first().contains('Toto');
  })
});
