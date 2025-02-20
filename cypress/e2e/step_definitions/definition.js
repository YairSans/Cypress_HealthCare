///<reference types = "Cypress">
require('cypress-xpath');

import { Homepage_Method } from "../POM/Home_Method"
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Login_Method } from "../POM/Login_Method";
import { Appoit_Method } from "../POM/Appoit_Method";


Given ("El usuario abre la pagina para primer validar el Homepage",()=>{
    cy.NavigateTo('/herokuapp');
    Homepage_Method.Validate_Home_Page()
})
When ("El usuario hace click en el boton de Cita",()=>{
    Homepage_Method.ClickonAppoitment()
})
When ("El usuario ingresa su Nombre {word}",(NAME)=>{
    Login_Method.Enter_Name(NAME)
})
When ("El usuario ingresa su Contraseñas {word}",(PASS)=>{
    Login_Method.Enter_Password(PASS)
})
When ("El usuario hace click en el enviar cita",()=>{
    Login_Method.Submit()
})
Then ("Se ingresara a la pantalla de Cita",()=>{
    cy.xpath("//h2[contains(text(),'Make Appointment')]").should("be.visible")
})
When ("Selecciona el facility {word}",(facility)=>{
    Appoit_Method.Selectfacility(facility)
})
When ("Aplica la readmision",()=>{
    Appoit_Method.ClickonAppoitment()
})
When ("Selecciona el programa {word}",(Option)=>{
    Appoit_Method.Checkboxes(Option)
})
When ("Una fecha de visita",()=>{
    Appoit_Method.Date("03/03/2025")
})
When ("un comentario adicional",()=>{
    Appoit_Method.Note()
})