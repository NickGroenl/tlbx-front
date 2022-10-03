import Home from '../routes/home';

jest.mock('../routes/home.js');

test('should render user list', () => {
  const list = [{name: 'Bob'}];
  Home.getFiles.mockResolvedValue(Promise.resolve(list));
  
  
  // TODO: Renderiza el componente y realiza los asserts
  // ...
});