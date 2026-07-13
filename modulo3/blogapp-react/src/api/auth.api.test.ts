// src/api/auth.api.test.ts
import { login } from './auth.api'

describe('login()', () => {
  it('should return the access token on valid credentials', async () => {
    const token = await login({ username: 'higuera', password: 'secret' })
    expect(token).toBe('fake-jwt-token')
  })

  it('should reject when the credentials are invalid', async () => {
    await expect(login({ username: 'higuera', password: 'wrong' })).rejects.toMatchObject({
      response: { status: 401 },
    })
  })
})