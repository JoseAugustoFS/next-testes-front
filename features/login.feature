Feature: Login de Usuário

  Scenario: Usuário insere credenciais e clica em "Entrar"
    Given que estou na página de login
    When eu digito "adm" no campo "Usuário"
    And eu digito "senha" no campo "Senha"
    And eu clico no botão "Entrar"
    And eu clico no botão "Página do Adm"
    Then eu devo ver a página do ADM
