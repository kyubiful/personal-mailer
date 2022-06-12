import supertest from 'supertest'
import { app, server } from '../index'

const api = supertest(app)

describe('Testing global service', () => {
  test('get /ping should return ok', async () => {
    await api.get('/ping')
      .expect(200)
      .expect({ response: 'ok' })
  })
  test('post / ', async () => {
    await api.post('/')
      .expect(404)
  })
})

afterAll(() => {
  server.close()
})
