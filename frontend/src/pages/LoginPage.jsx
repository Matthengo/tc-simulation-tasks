import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router';
import { useTextField } from '../hooks/useTextField';
import { login } from '../services/APICalls';

function LoginPage() {
  const [email, emailInput] = useTextField({ type: 'text', label: 'Email' });
  const [password, passwordInput] = useTextField({ type: 'password', label: 'Senha' });
  
  const history = useHistory();

  const handleClick = async () => {

    const loginObj = await login({ email, password });
    console.log(loginObj);
    
    if(loginObj.status === 200){
      localStorage.setItem('token', loginObj.data.token);
      history.push('/tasks');
    };
  }

  return (
    <Container maxWidth='sm'>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Typography variant='h5' component='h1' >Entre com sua Conta</Typography>
          { emailInput }
          { passwordInput }
          <Button variant="contained" onClick={ handleClick }>Entrar</Button>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <Typography>Não tem uma conta? </Typography>
            <Button variant="text">Crie uma</Button>
          </Stack>
        </Stack>
    </Container>
  )
}

export default LoginPage
