import { Box } from '@mui/material'
import { FC } from 'react'
import { LoginPage } from './views/loginPage'

type AppPropsType = {
  
}
export const App: FC<AppPropsType> = ({  }) => {
  return <Box sx={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 16
  }}  >
    <LoginPage />
  </Box>
}