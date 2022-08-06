import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { FC } from 'react'
import { UserPropsType } from '../models/users'
import { useDeleteUserMutation } from '../servises/usersApi'

type PropsType = {
  content: UserPropsType

  buttonClickHandler: (id: string) => void
}

export const User: FC<PropsType> = ({ content, buttonClickHandler }) => {

  const { age, fullName, gender, id, photoUrl, nationality } = content

  const [deleteUser] = useDeleteUserMutation()

  return <>
    <Card
      sx={{
        margin: 3,
        padding: 3
      }}
    >
      <CardMedia
        component='img'
        height="300"
        image={photoUrl}
        alt={fullName}
      />
      <CardContent >
        <Typography component='h2' variant='h4'>
          {fullName}
        </Typography>
        <Typography component='p' variant='h5'>
          Возраст: {age}
        </Typography>
        <Typography component='p' variant='h5'>
          Пол: {gender}
        </Typography>
        <Typography component='p' variant='h5'>
          Национальность: {nationality}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' color='info' onClick={() => buttonClickHandler(id)}>Изменить</Button>
        <Button variant='contained' color='error' onClick={() => deleteUser(id)} >Удалить</Button>
      </CardActions>
    </Card>
  </>
}