// src/hooks/useAuth.test.tsx
import { act, renderHook } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useAuth } from './useAuth'

describe('useAuth', () => {
  it('arranca sin usuario autenticado', () => {
    const { result } = renderHook(() => useAuth())

    expect(result.current.user).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
  })

  it('login setea el usuario y marca como autenticado', () => {
    const { result } = renderHook(() => useAuth())

    act(() => result.current.login('Ada'))

    expect(result.current.user).not.toBeNull()
    expect(result.current.user?.name).toBe('Ada')
    expect(result.current.isAuthenticated).toBe(true)
  })

  it('logout limpia el usuario', () => {
    const { result } = renderHook(() => useAuth())

    act(() => result.current.login('Ada'))
    expect(result.current.isAuthenticated).toBe(true)

    act(() => result.current.logout())

    expect(result.current.user).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
  })
})