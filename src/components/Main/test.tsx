import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Passo 1. Renderizar o componente
    const { container } = render(<Main />)
    // Passo 2. Buscar o elemento e verificar a existência dele
    expect(
      screen.getByRole('heading', { name: /Hello world/i })
    ).toBeInTheDocument()

    //Gerar snapshot -> gera capturas de tela de componentes e as compara pixel a pixel
    expect(container.firstChild).toMatchSnapshot()
  })
})
