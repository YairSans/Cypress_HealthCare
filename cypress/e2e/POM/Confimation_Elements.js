require('cypress-xpath');

export class Confirmation_Elem {
    static get Title (){
        return{
            get confirmation(){
                return cy.xpath("//h2[contains(.,'Appointment Confirmation')]").should("be.visible")
            }
        }
    }
    static get Buttom (){
        return{
            get home(){
                return cy.xpath("//a[contains(.,'Go to Homepage')]").should("be.visible")
            }
        }
    }

}