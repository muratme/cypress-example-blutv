Feature: Login Page Suite

    Scenario: Login
        Given Open "giris" Page
        When Fulfill Login Form
        Then Assert Profile Avatar
