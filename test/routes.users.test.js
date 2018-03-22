process.env.NODE_ENV = 'test';
const expect = require('chai').expect;


// const app = require('../src/server');
const request = require('request-promise').defaults({
  resolveWithFullResponse: true,
  simple: false
});

function getURL(path) {
  return `http://localhost:3000${path}`;
}

const server = require('../src/server');


describe('Routes USERS tests', async () => {
  describe('GET /users', async () => {
    it('Should get all users', async () => {
      let response = await request({
        method: 'get',
        uri: getURL('/users'),
        json: true,
        body: {}
      });
      expect(response.body.data.length).to.equal(2);
    });
    it('Should get single user', async () => {
      let response = await request({
        method: 'get',
        uri: getURL('/users'),
        json: true,
        body: {}
      });
      let singleUser = await request({
        method: 'get',
        uri: getURL(`/users/${response.body.data[0].id}`),
        json: true,
        body: {}
      });
      expect(singleUser.name).to.equal(response.body.data[0].id.name);
    });
  });
});
