import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { FC } from 'react'

type LoginPagePropsType = {

}
export const LoginPage: FC<LoginPagePropsType> = ({ }) => {

  const formik = useFormik({
    initialValues: {
      login: '',
      password: ''
    },
    onSubmit: (values) => {
      console.table(JSON.stringify(values))
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
        <TextField id={'login'} margin={'normal'} fullWidth label='login' value={formik.values.login} onChange={formik.handleChange} />
        <TextField id='password' margin={'normal'} fullWidth label='password' value={formik.values.password} onChange={formik.handleChange} />
        <Button
          variant='contained'
          type='submit'
          fullWidth
          color='primary'
        >Логин</Button>
      </Box>
  </>
}