import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from '../utils/auth'

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';

import MatchService from '../services/Match.service';
import { createMatch, findAll, finishMessage, newMatch, updateScore } from './mocks/match.mock';
import { authorization, token } from './mocks/auth.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Router: Match', () => {
  let chaiHttpResponse: Response;
  
  afterEach(() => {
    sinon.restore();
  })

  it('get - /matches', async () => {
    // @ts-ignore
    sinon.stub(MatchService, 'getMatches').resolves(findAll);
    chaiHttpResponse = await chai.request(app).get('/matches');
    
    const { status, body } = chaiHttpResponse;

    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(findAll)
  })


  it('post - /matches', async () => {
    // @ts-ignore
    sinon.stub(MatchService, 'createMatch').resolves(newMatch);
    sinon.stub(jwt, 'validateToken').resolves(token)
    chaiHttpResponse = await chai.request(app)
      .post('/matches')
      .set('Authorization', authorization)
      .send(createMatch);
    
    const { status, body } = chaiHttpResponse;

    expect(status).to.be.deep.equal(201)
    expect(body).to.be.deep.equal(newMatch)
  })

  it('patch - /matches/:id', async () => {
    // @ts-ignore
    sinon.stub(MatchService, 'updateScore').resolves(updateScore);
    sinon.stub(jwt, 'validateToken').resolves(token)
    chaiHttpResponse = await chai.request(app)
      .patch('/matches/1')
      .set('Authorization', authorization)
      .send(updateScore);
    
    const { status, body } = chaiHttpResponse;

    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(updateScore)
  })

  it('patch - /matches/:id/finish', async () => {
    // @ts-ignore
    sinon.stub(MatchService, 'finishMatch').resolves(finishMessage);
    sinon.stub(jwt, 'validateToken').resolves(token)
    chaiHttpResponse = await chai.request(app)
      .patch('/matches/41/finish')
      .set('Authorization', authorization);

    const { status, body } = chaiHttpResponse;

    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(finishMessage)
  })
})
