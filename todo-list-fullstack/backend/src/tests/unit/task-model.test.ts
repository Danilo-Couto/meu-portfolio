import { expect } from 'chai';
import Sinon, { SinonStub } from 'sinon';
import prismaClient from '../../dataBase/prismaClient';
import TaskModel from '../../models/task';
import { content, id, name, status, taskMock, userId, } from '../mocks/taskMock';

describe('Tests Model', () => {
    describe('success', () => {
      before(() => {
        Sinon.stub(prismaClient, 'task').resolves(taskMock);
      });
  
      after(() => {
        (prismaClient.task.create as SinonStub).restore();
      })
  
      it('success', async () => {
        const taskModel = new TaskModel()
        const taskCreated = await taskModel.create(name, content, status, userId);
        expect(taskCreated).to.be.deep.equal(taskMock);
      })
    })

    describe('Tests Find method', () => {
        before(() => {
            Sinon.stub(prismaClient, 'task').resolves([taskMock]);
          });
      
          after(() => {
            (prismaClient.task.findMany as SinonStub).restore();
          })
    
        it('success', async () => {
            const taskModel = new TaskModel()
            const taskCreated = await taskModel.findAll();
            expect(taskCreated).to.be.deep.equal([taskMock]);
        })
      })

    describe('Tests FindOne method', () => {
        before(() => {
            Sinon.stub(prismaClient, 'task').resolves([taskMock]);
          });
      
          after(() => {
            (prismaClient.task.findUnique as SinonStub).restore();
          })

    it('success', async () => {
        const taskModel = new TaskModel()
        const taskCreated = await taskModel.findOne(id);
        expect(taskCreated).to.be.deep.equal(taskMock);
        })
    })

describe('Tests Update method', () => {
    before(() => {
        Sinon.stub(prismaClient, 'task').resolves([taskMock]);
      });
  
      after(() => {
        (prismaClient.task.update as SinonStub).restore();
      })

    it('success', async () => {
        const taskModel = new TaskModel()
        const taskCreated = await taskModel.updateOne(id, name, content, status, userId);
        expect(taskCreated).to.be.deep.equal(taskMock);
        })
    })

describe('Tests Delete method', () => {
    before(() => {
        Sinon.stub(prismaClient, 'task').resolves(taskMock);
      });
  
      after(() => {
        (prismaClient.task.delete as SinonStub).restore();
      })

    it('success', async () => {
        const taskModel = new TaskModel()
        const taskCreated = await taskModel.findOne(id);
        expect(taskCreated).to.be.deep.equal(taskMock);
        })
    })

    describe('Tests Delete method', () => {
        before(() => {
            Sinon.stub(prismaClient, 'task').resolves(taskMock);
          });
      
          after(() => {
            (prismaClient.task.deleteMany as SinonStub).restore();
          })
    
        it('success', async () => {
            const taskModel = new TaskModel()
            const taskCreated = await taskModel.deleteAll();
            expect(taskCreated).to.be.deep.equal(taskMock);
        })
    })
})