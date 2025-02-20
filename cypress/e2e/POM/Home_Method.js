import { Homepage_Elem } from "./Home_Elements"
let Wait1 =1500

export class Homepage_Method{
    static Validate_Home_Page(){
        Homepage_Elem.Label.title
        Homepage_Elem.Label.subtitle
        cy.wait(Wait1)
    }
    static ClickonAppoitment(){
        Homepage_Elem.Button.make_Appointment
        cy.wait(Wait1)
    }
} 