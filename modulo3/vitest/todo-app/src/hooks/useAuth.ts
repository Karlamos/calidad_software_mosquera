// src/hooks/useAuth.ts
import { useState, useCallback } from 'react'
import type { User } from '../types'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  const login = useCallback((name: string) => {
    // simulación: generamos un usuario a partir del nombre
    setUser({ id: crypto.randomUUID(), name })
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const isAuthenticated = user !== null

  return { user, isAuthenticated, login, logout }
}