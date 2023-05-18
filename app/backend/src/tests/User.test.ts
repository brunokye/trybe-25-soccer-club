import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from '../utils/auth'

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';

import UserService from '../services/User.service';
import { authorization, credentials, role, token } from './mocks/user.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Router: User', () => {
  let chaiHttpResponse: Response;
  
  afterEach(() => {
    sinon.restore();
  })

  it('post - /login', async () => {
    // @ts-ignore
    sinon.stub(UserService, 'login').resolves(token);
    chaiHttpResponse = await chai.request(app)
      .post('/login')
      .send(credentials);
    
    const { status, body } = chaiHttpResponse;

    expect(status).to.be.deep.equal(200)
    expect(body.token).to.be.deep.equal(token)
  })

  it('get - /login/role', async () => {
    // @ts-ignore
    sinon.stub(UserService, 'getRole').resolves(role);
    sinon.stub(jwt, 'validateToken').resolves(token)
    chaiHttpResponse = await chai.request(app)
      .get('/login/role')
      .set('Authorization', authorization);
    
    const { status, body } = chaiHttpResponse;

    expect(status).to.be.deep.equal(200)
    expect(body.role).to.be.deep.equal(role)
  })
})
