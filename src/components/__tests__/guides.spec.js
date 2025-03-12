import { mount } from '@cypress/vue';
import { createPinia, setActivePinia } from 'pinia'; 
import Guides from '@/components/GuidesComponent.vue'; 
import { useF1Store } from '@/store/useF1Store';

describe('Guides Component with Pinia', () => {
  // Configuración de Pinia
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it('should render the guides title', () => {
    cy.mount(Guides, {
      global: {
        plugins: [createPinia()],
      },
    });

    // Verifica que el título de la guía esté presente
    cy.get('.guides__title').should('contain.text', '🏁Cómo Jugar en la FantasyRace🏁');
  });

  it('should render guide questions', () => {
    cy.mount(Guides, {
      global: {
        plugins: [createPinia()],
      },
    });

    // Verifica que las preguntas están presentes
    cy.get('.guides__question').should('have.length.greaterThan', 0);
  });

  it('should display the answer when a question is clicked', () => {
    cy.mount(Guides, {
      global: {
        plugins: [createPinia()],
      },
    });

    // Asegúrate de que las respuestas estén inicialmente ocultas
    cy.get('.guides__answer').should('not.be.visible');

    // Haz clic en la primera pregunta para mostrar la respuesta
    cy.get('.guides__question').first().click();

    // Verifica que la respuesta se haya mostrado
    cy.get('.guides__answer').first().should('be.visible');
  });

  // Si el store tiene algún estado o método que deba probarse, puedes hacer algo como esto:
  it('should use Pinia store if necessary', () => {
    // Accede al store de Pinia
    const store = useF1Store();

    // Si tienes algún estado que necesitas verificar, puedes hacerlo así:
    cy.wrap(store).should('have.property', 'someState').and('equal', 'expectedValue');
  });
});
