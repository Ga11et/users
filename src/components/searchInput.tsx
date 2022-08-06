import { Box, Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { FC } from 'react'
import { useAppDispatch } from '../app/hooks'
import { appSlice } from '../app/reducers/appReducer'

type SearchInputPropsType = {
  
}
export const SearchInput: FC<SearchInputPropsType> = ({  }) => {

  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: { search: '' },
    onSubmit(values) {
      dispatch(appSlice.actions.changeSearch(values.search))
    },
  })

  return <>
  <Box component='form' onSubmit={formik.handleSubmit} sx={{
    width: '350px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    marginTop: 3
  }} 
  >
    <TextField label='Поиск' id='search' sx={{ height: '100%' }} fullWidth value={formik.values.search} onChange={formik.handleChange} />
    <Button type='submit' variant='outlined' sx={{ height: '100%' }}>Найти</Button>
  </Box>
  </>
}