import { Box } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { User } from '../components/user'
import { UserDialog } from '../components/userDialog'
import { useGetUsersQuery } from '../servises/usersApi'

type UsersPagePropsType = {
  
}
export const UsersPage: FC<UsersPagePropsType> = ({  }) => {

  const { data, error, isLoading } = useGetUsersQuery({})
  const [isOpen, setIsOpen] = useState(false)

  return <>
    <UserDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
      }}
    >
      {data?.map((el) => <User content={el} key={el.id} setIsOpen={setIsOpen} />)}
    </Box>
  </>
}