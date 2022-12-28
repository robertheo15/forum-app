/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });
  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('[data-test-id="login"]').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('[data-test-id="login"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="Email"]').type('testuser@mail.com');
    cy.get('[data-test-id="login"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[placeholder="Email"]').type('testuser@mail.com');
    cy.get('input[placeholder="Password"]').type('wrong_password');
    cy.get('[data-test-id="login"]').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });
});
