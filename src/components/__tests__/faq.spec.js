import { mount } from '@cypress/vue';
import Faq from '@/components/FaqComponent.vue'; 

describe('FAQ Component', () => {
  it('should display the FAQ title', () => {
    cy.mount(Faq);

    // Verifica que el título de la sección de FAQ esté presente
    cy.get('.faq__title').should('contain.text', "FAQ'S");
  });

  it('should display questions in the FAQ', () => {
    cy.mount(Faq);

    // Verifica que las preguntas estén presentes (al menos una pregunta)
    cy.get('.faq__question').should('have.length.greaterThan', 0);
  });

  it('should hide answers initially', () => {
    cy.mount(Faq);

    // Verifica que las respuestas estén ocultas inicialmente
    cy.get('.faq__answer').should('not.be.visible');
  });

  it('should show the answer when a question is clicked', () => {
    cy.mount(Faq);

    // Haz clic en la primera pregunta
    cy.get('.faq__question').first().click();

    // Verifica que la respuesta se haya mostrado
    cy.get('.faq__answer').first().should('be.visible');
  });
});
