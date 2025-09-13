import useLogin from '@/hooks/useLogin';
import { setPageProperties } from '@/store/actions/page.action';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const { email, password, error, handleChange, handleLogin } = useLogin();

  useEffect(() => {
    dispatch(setPageProperties('login', '/login', false, null));
  }, [dispatch]);
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={(theme) => ({ padding: theme.spacing(2), backgroundColor: theme.palette.background.paper })}>
        <Typography
          variant="h2"
          component="h2"
          sx={(theme) => ({
            fontSize: theme.spacing(5),
            paddingBlock: theme.spacing(2),
            color: theme.palette.text.primary,
          })}
        >
          Login
        </Typography>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          autoComplete="off"
          value={email}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          sx={(theme) => ({ fontSize: theme.spacing(5), marginBlock: theme.spacing(1) })}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          sx={(theme) => ({ fontSize: theme.spacing(5), marginBlock: theme.spacing(1) })}
        />
        <Box sx={(theme) => ({ minHeight: theme.spacing(3) })}>
          {error && (
            <Typography
              variant="body1"
              sx={(theme) => ({ fontSize: theme.spacing(2), color: theme.palette.error.main })}
            >
              {error}
            </Typography>
          )}
        </Box>
        <Button
          variant="contained"
          sx={(theme) => ({ fontSize: theme.spacing(2), marginBlock: theme.spacing(1) })}
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
