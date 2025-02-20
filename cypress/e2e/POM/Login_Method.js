import { Login_Elem } from "./Login_Elements"
let Wait1 =500

export class Login_Method{
    static Validate_Login_Page(){
        Login_Elem.Label.title
        Login_Elem.Label.subtitle
        cy.wait(Wait1)
    }    
    static Enter_Name(NAME){
        Login_Elem.Fields.username.type(NAME)
        cy.wait(Wait1)
    }
    static Enter_Password(PASS){
        Login_Elem.Fields.password.type(PASS)
        cy.wait(Wait1)
    }
    static Submit(){
        Login_Elem.Button.access.click()
        cy.wait(Wait1)
    }
} 