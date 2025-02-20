Feature: Solicitar Cita para revision medica
Scenario Outline: Scenario Outline name: Se realizara el proceso 2E2 para registro de Cita
    Given El usuario abre la pagina para primer validar el Homepage
    And El usuario hace click en el boton de Cita
    And El usuario ingresa su Nombre <Nombre>
    And El usuario ingresa su Contraseñas <Contraseña>
    And El usuario hace click en el enviar cita
    Then Se ingresara a la pantalla de Cita
    And Selecciona el facility <facility>
    And Aplica la readmision
    And Selecciona el programa <Option>
    Examples:
    |Option   |
    |Medicare |
    |Medicaid |
    |None     |
    And Una fecha de visita
    And un comentario adicional
    Examples:
    |Nombre    |Contraseña           |facility                        |
    |John Doe  |ThisIsNotAPassword   |Tokyo CURA Healthcare Center    |
    |John      |ThisIsNotAPasswor    |Hongkong CURA Healthcare Center |
    |          |                     |Seoul CURA Healthcare Center    |