import styled from 'styled-components';
import { Notes } from '../Notes';

export function App() {
  return (
    <Wrapper>
      <Notes />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;
