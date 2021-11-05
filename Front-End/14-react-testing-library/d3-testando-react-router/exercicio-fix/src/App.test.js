import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from './App';
describe('Testes do exercicio', () => {
  test('Testa se o texto de tela incial é renderizado', () => {
    renderWithRouter(<App />);
  
    const homeEl = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
  
    expect(homeEl).toBeInTheDocument();
    
  });

  test('Testa se renderiza o componente Sobre', () => {
    const { history } = renderWithRouter(<App />);
    
    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument();
  })
})
