import { mount } from '@cypress/vue'
import Years from '@/components/YearsComponent.vue' // Reemplaza con la ruta correcta a tu componente
import { createPinia } from 'pinia'
import { useF1Store } from '@/store/useF1Store' // Importa tu store si lo necesitas

describe('Pruebas del componente Years', () => {
  it('Debería mostrar las opciones de año correctamente y seleccionar un año', () => {
    // Crea una nueva instancia del store si es necesario
    const pinia = createPinia()

    // Montamos el componente con el store y cualquier prop adicional que necesites
    mount(Years, {
      global: {
        plugins: [pinia] // Inyectamos el store Pinia
      }
    })

    // Verificamos que el <select> contenga las opciones de los años (26 años)
    cy.get('select#year-select')
      .find('option')
      .should('have.length', 26) // Debería haber 26 años en las opciones

    // Comprobamos que el primer año sea el 2000
    cy.get('select#year-select')
      .find('option')
      .first()
      .should('have.text', '2000')

    // Simulamos un cambio en el <select> y seleccionamos el año 2005
    cy.get('select#year-select').select('2005')

    // Verificamos que el valor seleccionado haya cambiado correctamente
    cy.get('select#year-select').should('have.value', '2005')

    // Verificamos que el método handleYearChange haya sido llamado
    // Si tienes un método que se ejecuta al cambiar el año, puedes espiarlo o comprobar su efecto
    // Si necesitas espiar el store y las acciones, puedes usar un espía de Cypress:
    const spy = cy.spy(useF1Store(), 'setYear')
    
    // Simulamos otro cambio de selección
    cy.get('select#year-select').select('2010')
    
    // Verificamos que se haya llamado al método setYear con el nuevo valor
    cy.wrap(spy).should('have.been.calledWith', '2010')
  })

  it('Debería emitir nextStep al cambiar de año', () => {
    // Crea una nueva instancia del store si es necesario
    const pinia = createPinia()

    // Usamos cy.spy para verificar la emisión de eventos
    const spy = cy.spy()

    // Montamos el componente con el espía para el evento "nextStep"
    mount(Years, {
      global: {
        plugins: [pinia]
      },
      props: {
        nextStep: spy // Usamos el espía para capturar el evento
      }
    })

    // Simulamos un cambio en el <select> y seleccionamos el año 2005
    cy.get('select#year-select').select('2005')

    // Verificamos que el evento "nextStep" haya sido emitido
    cy.wrap(spy).should('have.been.calledOnce')
  })
})
