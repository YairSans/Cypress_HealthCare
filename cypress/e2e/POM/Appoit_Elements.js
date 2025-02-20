require('cypress-xpath');

export class Appoitment_Elem {
    static get Title (){
        return{
            get appointment(){
                return cy.xpath("//h2[contains(.,'Make Appointment')]").should("be.visible")
            }
        }
    }
    static get facilityDropdown (){
        return cy.get("#combo_facility").should("be.visible")
    }
    static get ReadmissionCheckbox (){
        return cy.get('.checkbox-inline').should("be.visible")
    }
    static get Check (){
        return{
            get Medicare(){
                return cy.get("#radio_program_medicare").should("be.visible")
            },
            get Medicaid(){
                return cy.get('#radio_program_medicaid').should("be.visible")
            },
            get None(){
                return cy.get("#radio_program_none").should("be.visible")
            }
        }
    }
    static get visitDateInput (){
        return cy.get("#txt_visit_date").should("be.visible")
    }
    static get commentTextarea (){
        return cy.get("#txt_comment").should("be.visible")
    }
    static get bookAppointmentButton (){
        return cy.get("#btn-book-appointment").should("be.visible")
    }
}