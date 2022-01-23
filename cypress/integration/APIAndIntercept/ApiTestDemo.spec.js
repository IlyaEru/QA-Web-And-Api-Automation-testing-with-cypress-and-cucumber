describe('My First Test Suite', () => {

    it('My FirstTest case', () => {

        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {

            "name": "TestBook",
            "isbn": "bcggsss",
            "aisle": "22swe7",
            "author": "John foe"
        }).then((response) => {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
    })


})