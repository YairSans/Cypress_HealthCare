import { Appoitment_Elem } from "./Appoit_Elements"
let Wait1 =1500

export class Appoit_Method{
    static Validate_Login_Page(){
        Appoitment_Elem.Label.title
        cy.wait(Wait1)
    }
    static Selectfacility(facility){
        Appoitment_Elem.facilityDropdown.select(facility)
        cy.wait(Wait1)
    }
    static ClickonAppoitment(){
        Appoitment_Elem.ReadmissionCheckbox.check()
        cy.wait(Wait1)
    }
    static Checkboxes(){
        Appoitment_Elem.Check.Medicare.check()
        cy.wait(Wait1)
    }
    static Date(Day){
        Appoitment_Elem.visitDateInput.type(Day)
        cy.wait(Wait1)
    }
    static Note(){
        Appoitment_Elem.commentTextarea.type("Test")
        cy.wait(Wait1)
    }
} 