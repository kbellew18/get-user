var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var assert = require('assert');

describe('UI Flow Tests', function() {
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true })
  })

  describe('Using the app', function(){
    describe('adding a new user', () => {
      it('should enter a new user and redirect to /userlist', done => {
        nightmare
          .goto('http://localhost:3000/newuser')
          // .wait(2000)
          .type('#inputUserFirstName', 'Kieran')
          .type('#inputUserLastName', 'Bellew')
          .click('#btnSubmit')
          .wait(4000)
          .end()
          .then(result => { done() })
          .catch(done)
      })
    })
  })
})


// nightmare
//   .goto('http://localhost:3000/newuser')
//   .wait(2000)
//   .type('#inputUserFirstName', 'Kieran')
//   .type('#inputUserLastName', 'Bellew')
//   .click('#btnSubmit')
//   .wait(4000)
//   .end()
  // .then(function (result) {
  //   console.log(result);
  // })
  // .catch(function (error) {
  //   console.error('Search failed:', error);
  // });
