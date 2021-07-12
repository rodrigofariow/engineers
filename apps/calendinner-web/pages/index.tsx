import styled from 'styled-components';
import { Message } from '@engineers/api-interfaces';
import { useEffect, useState } from 'react';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  const [message, setMessage] = useState('asd');

  useEffect(() => {
    fetch('/api/hello')
      .then<Message>((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <h2>Resources &amp; Tools</h2>
      <p>Thank you for using and showing some ♥ for Nx.</p>
      <p>{message}</p>
    </StyledPage>
  );
}

export default Index;
