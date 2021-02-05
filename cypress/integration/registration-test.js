describe('Registration Form Testing', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3001/register')
        console.log('test')
    })

    const userNameInput = () => cy.get('#username')
    const passwordInput = () => cy.get('#password')
    const emailInput = () => cy.get('#email')
    const tosInput = () => cy.get('#tos')
    const submitButton = () => cy.get('[type="submit"]')
    


    const personUserName = 'Uniquename123'
    const personPassword = 'password123'
    const personEmail = 'legacies@gmail.com'
    
    
    


     it('allows user to add new name in name input', () => {
        //Get the Name input and type a name in it
        
        userNameInput().type(personUserName)
          

    })

    it('allows user to add new password in password input', () => {
        //Get the Password input and type a password in it
        
        passwordInput().type(personPassword)
          

    })


    it('allows user to add new email in email input', () => {
        //Get the Email input and type an email address in it
        
        emailInput().type(personEmail)
          

    })

    

    it('allows user to check the terms of service box', () => {
        
        tosInput().click()
        


    })
    

    it('allows user to submit the form by meeting schema req', () => {
        
        userNameInput().type(personUserName)
        passwordInput().type(personPassword)
        emailInput().type(personEmail)
        tosInput().click()
        submitButton().click()
        


    }) 

    //tests complete--functioning properly
})