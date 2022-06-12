import supertest from 'supertest'
import { app, server } from '../index'

const api = supertest(app)

describe('Testing mail service', () => {
  test('post /api/mail/send without data', async () => {
    await api.post('/api/mail/send')
      .expect(400)
  })
  test('post /api/mail/send with wrong data', async () => {
    const data = {
      name: 'Sergio',
      test: 'test'
    }
    await api.post('/api/mail/send')
      .send(data)
      .expect(400)
  })
  test('post /api/mail/send with correct data', async () => {
    const data = {
      name: 'Sergio',
      from: 'serzmr@gmail.com',
      text: 'text',
      to: 'kyubimailer@gmail.com'
    }
    await api.post('/api/mail/send')
      .send(data)
      .expect(200)
  })
})

afterAll(() => {
  server.close()
})
