import React from 'react'
import { Typography, Box } from '@mui/material'

const GithubURL = 'https://github.com/kuuukooo'

export default function Footer () {
  return (
    <Box
      component='footer'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'var(--fondo)',
        color: 'var(--texto)',
        height: 60,
        marginTop: 'auto',
        position: 'relative',
        borderTop: '1px solid gray',
        bottom: 0,
        width: '100%'
      }}
    >
      <Typography variant='body2'>
        Coded with ☕ by <a style={{ color: '#4da7ff' }} href={GithubURL}>José Ramírez</a>
      </Typography>
    </Box>
  )
}
