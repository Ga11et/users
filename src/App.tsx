import { Box } from '@mui/material'
import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from './views/loginPage'
import { UsersPage } from './views/usersPage'

type AppPropsType = {
  
}
export const App: FC<AppPropsType> = () => {
  return <Box sx={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 16
  }}  >
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/users' element={<UsersPage />} />
    </Routes>
  </Box>
}