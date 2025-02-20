require('cypress-xpath');

export class Login_Elem {
    static get Label (){
        return{
            get title(){
                return cy.xpath("//h2[contains(text(),'Login')]").should("be.visible")
            },
            get subtitle(){
                return cy.xpath("//p[@class='lead']").should("be.visible")
            }
        }
    }
    static get Fields (){
        return{
            get username(){
                return cy.get('#txt-username').should("be.visible").clear()
            },
            get password(){
                return cy.get('#txt-password').should("be.visible").clear()
            }
        }
    }
    static get Button (){
        return{
            get access(){
                return cy.xpath("//button[contains(.,'Login')]").should("be.visible")
            }
        }
    }
}