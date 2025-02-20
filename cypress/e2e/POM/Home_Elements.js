require('cypress-xpath');

export class Homepage_Elem {
    static get Label (){
        return{
            get title(){
                return cy.xpath("//h1[contains(text(),'CURA Healthcare Service')]").should("be.visible")
            },
            get subtitle(){
                return cy.xpath("//h3[contains(text(),'We Care About Your Health')]").should("be.visible")
            }
        }
    }
    static get Button (){
        return{
            get make_Appointment(){
                const btn = cy.xpath("//a[@id='btn-make-appointment']")
                if(!btn.should("be.visible")){
                    cy.log("El boton no esta deshabilitado")
                }else
                    cy.log("El boton esta habilitado")
                    btn.click()
            return btn
            }
        }
    }
}