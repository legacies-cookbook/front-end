describe('Login Form Testing', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3000/login')
        console.log('test')
    })

    const userNameInput = () => cy.get('#username')
    const passwordInput = () => cy.get('#password')
    const submitButton = () => cy.get('[type="submit"]')
    


    const personUserName = 'Uniquename123'
    const personPassword = 'password123'
    
    
    


     it('allows user to add new name in name input', () => {
        //Get the Name input and type a name in it
        
        userNameInput().type(personUserName)
          

    })

    it('allows user to add new password in password input', () => {
        //Get the Password input and type a password in it
        
        passwordInput().type(personPassword)
          

    })
    

    it('allows user to submit the form by meeting schema req', () => {
        
        userNameInput().type(personUserName)
        passwordInput().type(personPassword)
        submitButton().click()
        


    }) 

    //tests complete--functioning properly
})