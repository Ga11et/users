import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { useLoginMutation } from '../servises/usersApi'

type LoginPagePropsType = {

}
export const LoginPage: FC<LoginPagePropsType> = () => {

  const [postLogin] = useLoginMutation()

  const { isAuth, error } = useAppSelector(state => state.appReduser)

  const navigate = useNavigate()

  useEffect(() => {
    isAuth && navigate('users')
  },[isAuth, navigate])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      postLogin(values)
    }
  })

  return <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        component={'form'}
        onSubmit={formik.handleSubmit}
        margin={5}
        width={'350px'}
      > 
        <Typography component={'h1'}>
          Логин
        </Typography>
        <TextField error={!!error} id={'email'} margin={'normal'} fullWidth label='email' value={formik.values.email} onChange={formik.handleChange} />
        <TextField error={!!error} helperText={error} id='password' type='password' margin={'normal'} fullWidth label='password' value={formik.values.password} onChange={formik.handleChange} />
        <Button
          variant='contained'
          type='submit'
          fullWidth
          color='primary'
        >Логин</Button>
      </Box>
  </>
}