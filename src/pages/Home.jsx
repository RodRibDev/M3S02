import styled from 'styled-components';
import { useThemeContext } from '../contexts/Theme';
import { useHistory } from 'react-router-dom';

function Home() {

  const { changeTheme } = useThemeContext();
  const history = useHistory();

  return (
    <ContentContainer>
      <h1>Home</h1>
      <Button
        onClick={changeTheme}
      >Mudar Tema</Button>
      <a
        onClick={() => history.push('/about')}
      >Ir para about</a>
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.background};

  h1 {
    font-size: 150px;
    color: ${props => props.theme.font};
  }

  a {
    margin-top: 20px;
    color: ${props => props.theme.font};
    cursor: pointer;
  }
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;

  background: ${props => props.theme.button};
  color: ${props => props.theme.background};

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    filter: invert(1);
  }
`

export default Home;