import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { FC } from 'react'
import { UserPropsType } from '../models/users'

type UserDialogPropsType = {
  id?: string
  isOpen: boolean

  setIsOpen: (value: boolean) => void
}
export const UserDialog: FC<UserDialogPropsType> = ({ id, isOpen, setIsOpen }) => {

  const formik = useFormik({
    initialValues: {
      fullName: '',
      photoUrl: '',
      age: 0,
      gender: 'male',
      id: '',
      nationality: ''
    } as UserPropsType,
    onSubmit: (values) => {
      console.log(JSON.stringify(values))
      setIsOpen(false)
    },
  })

  return <>
    <Dialog open={isOpen} >
      <DialogTitle component='h2' variant='h5' textAlign='center' marginTop={3}>
        {id ? 'Изменить пользователя' : 'Добавить пользователя'}
      </DialogTitle>
      <DialogContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '350px',
          margin: '1em 2em'
        }}
          component={'form'}
          onSubmit={formik.handleSubmit}
        >
          <TextField id={'fullName'} margin={'normal'} fullWidth label='Введите полное имя' value={formik.values.fullName} onChange={formik.handleChange} />
          <TextField id={'age'} type={'number'} margin={'normal'} fullWidth label='Введите возраст' value={formik.values.age} onChange={formik.handleChange} />
          <TextField id={'nationality'} margin={'normal'} fullWidth label='Введите национальность' value={formik.values.nationality} onChange={formik.handleChange} />
          <Select name='gender' fullWidth value={formik.values.gender} onChange={formik.handleChange} sx={{
            margin: '16px 0 8px'
          }} >
            <MenuItem value={'male'}>Мужчина</MenuItem>
            <MenuItem value={'female'}>Женщина</MenuItem>
          </Select>
          <TextField id={'photoUrl'} margin={'normal'} fullWidth label='Скопируйте ссылку на фото' value={formik.values.photoUrl} onChange={formik.handleChange} />
          <DialogActions sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
            marginTop: 1
          }}>
            <Button variant='contained' color='error' type='button' onClick={() => setIsOpen(false)}>Закрыть</Button>
            <Button variant='contained' color='primary' type='submit'>Отправить</Button>
          </DialogActions>
        </Box>
      </DialogContent>

    </Dialog>
  </>
}