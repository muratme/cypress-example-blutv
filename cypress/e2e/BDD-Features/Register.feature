Feature: Register Page Suite

    Scenario Outline: User should see blutv logo
        Given Open <page> Page
        Examples:
            | page  | 
            | giris |
            | kayit |

    Scenario: Register and Play
        Given Open "olustur" Page
        When Fullfill Register Form
        And Fullfill Credit Card Form