'use strict';

const createCheckout = require('../../../src/checkout/rest/createCheckout'),
    sinon = require('sinon');

require('chai').should();

describe('Create a new checkout', () => {

    it('Should return 201 status code when create a new checkout', done => {
        const request = createRequest(),
            response = createResponse();

        const responseMock = sinon.mock(response);

        responseMock.expects('send').once().withArgs(201, sinon.match.any);
        createCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    it('Should call the next function', done => {
        const request = createRequest(),
            response = createResponse();

        const nextMock = sinon.mock();
        nextMock.once();

        createCheckout(request, response, nextMock);
        nextMock.verify();
        done();
    });

    it('Should return the checkout total', done => {
        const request = createRequest(),
            response = createResponse();

        const responseMock = sinon.mock(response);

        responseMock.expects('send').once().withArgs(sinon.match.any, {
            total: {
                value: 0,
                currency: 'EUR'
            }
        });

        createCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    it('Should return the location header', done => {
        const request = createRequest(),
            response = createResponse();

        const responseMock = sinon.mock(response);

        responseMock.expects('setHeader').once().withArgs('Location', 'http://localhost:3000/api/checkouts/');

        createCheckout(request, response, () => {
            responseMock.verify();
            done();
        });
    });

    function createRequest() {
        return {};
    }

    function createResponse() {

        return {
            send: () => {
            },
            setHeader: () => {
            }
        };

    }

});