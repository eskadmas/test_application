var request = require("request"),
    assert = require('assert'),
    base_url = "http://localhost:8000/";

describe("System Test", function(done) {
    describe("GET /", function() {
        it("returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                //expect(response.statusCode).toBe(200);
                console.log(response.statusCode);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });

    describe("POST /api/contacts", function() {
        it("returns status code 201", function(done) {
            request.post({
                    url: base_url + 'api/contacts',
                    form: {
                        first_name: 'Xavi',
                        last_name: 'Xernandez',
                        phone: '+403933445560',
                        email: 'xavi@gmail.com'
                    }
                },
                function(error, response, body) {
                    //expect(response.statusCode).toBe(200);
                    console.log(response.statusCode);
                    assert.equal(201, response.statusCode);
                    done();
                });
        });
    });

    describe("PUT /api/contacts/25", function() {
        it("returns status code 201", function(done) {
            request.put({
                    url: base_url + 'api/contacts/25',
                    form: {
                        phone: '+393933445044'
                    }
                },
                function(error, response, body) {
                    //expect(response.statusCode).toBe(200);
                    console.log(response.statusCode);
                    assert.equal(201, response.statusCode);
                    done();
                });
        });
    });

    describe("DELETE /api/contacts/47", function() {
        it("returns status code 200", function(done) {
            request.delete(base_url + 'api/contacts/47', function(error, response, body) {
                //expect(response.statusCode).toBe(200);
                console.log(response.statusCode);
                assert.equal(200, response.statusCode);
                done();
            });
        });
    });
});