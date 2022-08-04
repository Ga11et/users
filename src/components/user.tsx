import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { FC } from 'react'
import { UserPropsType } from '../models/users'

type PropsType = {
  content: UserPropsType

  setIsOpen: (value: boolean) => void
}

export const User: FC<PropsType> = ({ content, setIsOpen }) => {

  const { age, fullName, gender, id, photoUrl, nationality } = content

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
        <Button variant='contained' color='info' onClick={() => setIsOpen(true)}>Изменить</Button>
        <Button variant='contained' color='error'>Удалить</Button>
      </CardActions>
    </Card>
  </>
}