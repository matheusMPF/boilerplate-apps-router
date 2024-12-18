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

    //Gerar snapshot -> gera uma pasta snapshot na raiz do teste. Apenas se quisermos uma estrutura muito especifica
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o component
    const { container } = render(<Main />)
    // verifica se o background-color está correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
