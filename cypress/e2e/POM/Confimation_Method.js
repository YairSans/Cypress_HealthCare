import { Confirmation_Elem } from "./Confimation_Elements"
let Wait1 =500

export class Confirmation_Method{
    static Validate_Confirmation_Page(){
        Confirmation_Elem.Title.confirmation
        cy.wait(Wait1)
    }
    static ClickonHome(){
        Confirmation_Elem.Buttom.home.click()
        cy.wait(Wait1)
    }
} 