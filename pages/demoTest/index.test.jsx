import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DemoTest from '.';

beforeEach(() => render(<DemoTest />))

describe('demoTest', () => {
  it('Renderiza Titulo', () => {
    expect(screen.getByText(/Hola/i)).toBeInTheDocument()
  });

  it('Renderiza un párrafo', () => {
    expect(screen.getByText(/Este es un parrafo/i)).toBeInTheDocument()
  });
});