// src/components/SelectFilter.test.tsx (ejemplo ilustrativo)
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { it, expect, vi } from 'vitest'

it('selecciona la opción "active"', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()
  render(
    <select aria-label="Filtro" onChange={(e) => onChange(e.target.value)}>
      <option value="all">Todas</option>
      <option value="active">Activas</option>
      <option value="completed">Completadas</option>
    </select>,
  )

  // selecciona por value (también acepta el texto visible)
  await user.selectOptions(screen.getByLabelText('Filtro'), 'active')

  expect(onChange).toHaveBeenCalled()
})