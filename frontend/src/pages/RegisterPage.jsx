import React from 'react'
import { Button, Container, Stack, Typography } from '@mui/material';
// import PropTypes from 'prop-types'
import { registerUser } from '../services/APICalls';
import { useHistory } from 'react-router';
import { useTextField } from '../hooks/useTextField';

function RegisterPage() {
  const [username, nameInput] = useTextField({ type: 'text', label: 'Nome' });
  const [email, emailInput] = useTextField({ type: 'text', label: 'Email' });
  const [password, passwordInput] = useTextField({ type: 'password', label: 'Senha' });
  const [
    confirmPassword, 
    confirmPasswordInput
  ] = useTextField({ type: 'password', label: 'Confirme a Senha' });

  const history = useHistory();

  const hasEqualPasswords = (passwords) => {
    if(passwords.password !== passwords.confirmPassword) return false;

    return true;
  }

  const handleClick = async () => {
    if(!hasEqualPasswords({ password, confirmPassword })) return;

    const registerObj = await registerUser({ username, email, password });
    console.log(registerObj);
    
    if(registerObj.status === 201) history.push('/login');
  }

  return (
    <Container maxWidth='sm'>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Typography variant='h5' component='h1' >Crie uma Conta</Typography>
          { nameInput }
          { emailInput }
          { passwordInput }
          { confirmPasswordInput }
          <Button variant="contained" onClick={ handleClick }>Criar Conta</Button>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <Typography>Já tem conta? </Typography>
            <Button variant="text">Entre</Button>
          </Stack>
        </Stack>
    </Container>
  )
}

RegisterPage.propTypes = {

}

export default RegisterPage
