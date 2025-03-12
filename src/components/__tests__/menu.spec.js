import { mount } from '@cypress/vue';
import Menu from '@/components/MenuComponent.vue'; // Reemplaza con la ruta correcta de tu componente
import { createPinia } from 'pinia'; // Importa Pinia
import { setActivePinia } from 'pinia'; // Necesario para establecer Pinia como activo

describe('Menu Component', () => {
  beforeEach(() => {
    // Establecemos Pinia como activo
    const pinia = createPinia();
    setActivePinia(pinia);

    // Montamos el componente con Pinia configurado
    cy.mount(Menu, {
      global: {
        plugins: [pinia]  // Usamos Pinia como plugin global
      }
    });
  });

  it('should display the menu links', () => {
    // Verifica que los enlaces principales estén presentes
    cy.get('.menu__link').should('have.length', 5); // Debería haber 5 enlaces
    cy.get('.menu__link').first().should('contain.text', 'HOME');
    cy.get('.menu__link').eq(1).should('contain.text', 'JUEGO');
    cy.get('.menu__link').eq(2).should('contain.text', 'CLASIFICACION');
    cy.get('.menu__link').eq(3).should('contain.text', 'QUESTIONS');
    cy.get('.menu__link').eq(4).should('contain.text', 'GUIDES');
  });

  it('should toggle the mobile menu when the hamburger icon is clicked', () => {
    // Verifica que el menú móvil esté cerrado inicialmente
    cy.get('.menu__links').should('not.have.class', 'menu__links--open');
    
    // Simula un clic en el icono de la hamburguesa
    cy.get('.menu__hamburger').click();

    // Verifica que el menú se haya abierto
    cy.get('.menu__links').should('have.class', 'menu__links--open');
  });

  it('should close the mobile menu when a link is clicked', () => {
    // Abre el menú móvil
    cy.get('.menu__hamburger').click();
    cy.get('.menu__links').should('have.class', 'menu__links--open');

    // Haz clic en el primer enlace
    cy.get('.menu__link').first().click();

    // Verifica que el menú se haya cerrado
    cy.get('.menu__links').should('not.have.class', 'menu__links--open');
  });
});
