import { Box, Button } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { User } from '../components/user'
import { UserDialog } from '../components/userDialog'
import { useGetUsersQuery } from '../servises/usersApi'
import { ReactComponent as SuspenseSVG } from '../assets/suspense.svg'
import { SearchInput } from '../components/searchInput'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useNavigate } from 'react-router-dom'
import { appSlice } from '../app/reducers/appReducer'

type UsersPagePropsType = {
  
}
export const UsersPage: FC<UsersPagePropsType> = React.memo(() => {

  const { data, isLoading } = useGetUsersQuery({})
  const [isOpen, setIsOpen] = useState(false)
  const [dialogId, setDialogId] = useState('')
  const { isAuth, search } = useAppSelector(state => state.appReduser)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    !isAuth && navigate('../')
  }, [isAuth, navigate])

  const buttonClickHandler = (id = 'none') => {
    setDialogId(id)
    setIsOpen(true)
  }
  const logoutHandler = () => {
    dispatch(appSlice.actions.logout())
  }

  return <>
    <UserDialog isOpen={isOpen} setIsOpen={setIsOpen} userData={data?.find(el => el.id === dialogId)} />
    <Button sx={{ position: 'absolute', top: '50px', left: '50px' }} variant='outlined' size='large' onClick={logoutHandler}>Выйти</Button>
    <Button variant='contained' sx={{ width: '350px', height: '50px', fontSize: 18 }} type='button' onClick={() => buttonClickHandler()}>Добавить пользователя</Button>
    <SearchInput />
    {isLoading ? <SuspenseSVG /> : <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
      }}
    >
      {data?.filter(el => el.fullName.toLowerCase().indexOf(search.toLowerCase()) !== -1).map((el) => <User content={el} key={el.id} buttonClickHandler={buttonClickHandler} />)}
    </Box>}
  </>
})