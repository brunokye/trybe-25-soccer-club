import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import TeamModel from '../database/models/Team.model';
import { findAll, findByPk } from './mocks/team.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Router: Team', () => {  
  afterEach(() => {
    sinon.restore();
  })

  it('get - /teams', async () => {
    // @ts-ignore
    sinon.stub(TeamModel, 'findAll').resolves(findAll);
    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(findAll)
  })

  it('get - /teams/:id', async () => {
    // @ts-ignore
    sinon.stub(TeamModel, 'findByPk').resolves(findByPk);
    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.be.deep.equal(200)
    expect(body).to.be.deep.equal(findByPk)
  })
})
