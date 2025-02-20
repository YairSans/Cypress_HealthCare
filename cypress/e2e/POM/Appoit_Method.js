import { Appoitment_Elem } from "./Appoit_Elements"
let Wait1 =1000

export class Appoit_Method{
    static Validate_Appotiment_Page(){
        Appoitment_Elem.Label.title
        cy.wait(Wait1)
    }
    static Selectfacility(facility){
        Appoitment_Elem.facilityDropdown.select(facility)
        cy.wait(Wait1)
    }
    static ClickonAppoitment(){
        Appoitment_Elem.ReadmissionCheckbox.click()
        cy.wait(Wait1)
    }
    static Checkboxes(){
        Appoitment_Elem.Check.Medicare.click()
        cy.wait(Wait1)
    }
    static Checkboxes2(){
        Appoitment_Elem.Check.Medicaid.click()
        cy.wait(Wait1)
    }
    static Checkboxes3(){
        Appoitment_Elem.Check.None.click()
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
    static Buttom(){
        Appoitment_Elem.bookAppointmentButton.click()
        cy.wait(Wait1)
    }
} 