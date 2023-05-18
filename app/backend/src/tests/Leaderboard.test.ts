import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { Response } from 'superagent';

import LeaderboardService from '../services/Leaderboard.service';
import { getHomeLeaderboard } from './mocks/leaderboard.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Router: Leaderboard', () => {
  let chaiHttpResponse: Response;
  
  afterEach(() => {
    sinon.restore();
  })

  it('get - /leaderboard/home', async () => {
    // @ts-ignore
    sinon.stub(LeaderboardService, 'getHomeLeaderboard').resolves(getHomeLeaderboard);
    chaiHttpResponse = await chai.request(app).get('/leaderboard/home');
    
    const { status, body } = chaiHttpResponse;

    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(getHomeLeaderboard)
  })
})
