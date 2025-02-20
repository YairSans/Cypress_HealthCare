///<reference types = "Cypress">
import { Homepage_Method } from "./POM/Home_Method"
import { Login_Method } from "./POM/Login_Method"
import { Appoit_Method } from "./POM/Appoit_Method"
import { Confirmation_Method } from "./POM/Confimation_Method"

describe('ACCESO AL FORMULARIO PARA REALIZAR UNA CITA MEDICA', () => {
    beforeEach(()=>{
        cy.NavigateTo('/herokuapp');
        Homepage_Method.ClickonAppoitment()
        Login_Method.Enter_Name("John Doe")
        Login_Method.Enter_Password("ThisIsNotAPassword")
        Login_Method.Submit()
    })
    it("Capturar Datos de la cita exitosamente Hong Kong", () => {
        Appoit_Method.Validate_Appotiment_Page
        Appoit_Method.Selectfacility("Hongkong CURA Healthcare Center")
        Appoit_Method.ClickonAppoitment()
        Appoit_Method.Checkboxes()
        Appoit_Method.Date("03/03/2025 {esc}")
        Appoit_Method.Note()
        Appoit_Method.Buttom()
        Confirmation_Method.Validate_Confirmation_Page
        Confirmation_Method.ClickonHome()
    })
    it("Capturar Datos de la cita exitosamente Tokio", () => {
        Appoit_Method.Validate_Appotiment_Page
        Appoit_Method.Selectfacility("Tokyo CURA Healthcare Center")
        Appoit_Method.ClickonAppoitment()
        Appoit_Method.Checkboxes2()
        Appoit_Method.Date("01/04/2025 {esc}")
        Appoit_Method.Note()
        Appoit_Method.Buttom()
        Confirmation_Method.Validate_Confirmation_Page
        Confirmation_Method.ClickonHome()

    })
    it("Capturar Datos de la cita exitosamente Seoul", () => {
        Appoit_Method.Validate_Appotiment_Page
        Appoit_Method.Selectfacility("Seoul CURA Healthcare Center")
        Appoit_Method.ClickonAppoitment()
        Appoit_Method.Checkboxes3()
        Appoit_Method.Date("02/05/2025 {esc}")
        Appoit_Method.Note()
        Appoit_Method.Buttom()
        Confirmation_Method.Validate_Confirmation_Page
        Confirmation_Method.ClickonHome()
    })
})