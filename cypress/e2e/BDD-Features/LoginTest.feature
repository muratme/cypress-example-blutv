Feature: Login Page Suite

    Scenario: Login
        Given Open Login Page
        When Fulfill Login Form
        Then Assert Profile Avatar
