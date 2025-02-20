///<reference types = "Cypress">
import { Homepage_Method } from "./POM/Home_Method"
import { Login_Method } from "./POM/Login_Method";

describe('VALIDACION PARA ACCESO AL FORMULARIO', () => {
    beforeEach(()=>{
        cy.NavigateTo('/herokuapp');
        Homepage_Method.Validate_Home_Page()
        Homepage_Method.ClickonAppoitment()
    })
    it.only("Realizar Login Correcto", () => {
        Login_Method.Validate_Login_Page
        Login_Method.Enter_Name("John Doe")
        Login_Method.Enter_Password("ThisIsNotAPassword")
        //Login_Method.Submit
        cy.xpath("//button[contains(.,'Login')]").should("be.visible").click()
    })
    it("Realizar Login Incorrecto", () => {
        Login_Method.Validate_Login_Page()
        Login_Method.Enter_Name("John Do1")
        Login_Method.Enter_Password("ThisIsNotAPasswor1")
        //Login_Method.Submit
        cy.xpath("//button[contains(.,'Login')]").should("be.visible").click()
        const Er = cy.xpath("//p[@class='lead text-danger']").should("be.visible")
        const Er2 = Er.text
        if (Er2 !="Login failed! Please ensure the username and password are valid.") {
            cy.log("Es requerido ingreesar correctamente las credenciales")
        }else
        cy.log("Acceso correcto")
    })
    it("Realizar Login Sin Password", () => {
        Login_Method.Validate_Login_Page()
        Login_Method.Enter_Name("John Doe")
        //Login_Method.Submit
        cy.xpath("//button[contains(.,'Login')]").should("be.visible").click()
        const Er = cy.xpath("//p[@class='lead text-danger']").should("be.visible")
        const Er2 = Er.text
        if (Er2!="Login failed! Please ensure the username and password are valid.") {
            cy.log("Es requerido ingreesar correctamente las credenciales")
        }else
        cy.log("Acceso correcto")
    })
    it("Realizar Login Sin Username", () => {
        Login_Method.Validate_Login_Page()
        Login_Method.Enter_Password("ThisIsNotAPassword")
        //Login_Method.Submit
        cy.xpath("//button[contains(.,'Login')]").should("be.visible").click()
        const Er = cy.xpath("//p[@class='lead text-danger']").should("be.visible")
        const Er2 = Er.text
        if (Er2 != "Login failed! Please ensure the username and password are valid.") {
            cy.log("Es requerido ingreesar correctamente las credenciales")
        }else
        cy.log("Acceso correcto")
    })
})