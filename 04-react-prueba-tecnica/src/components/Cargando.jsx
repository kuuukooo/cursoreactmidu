import React from 'react'
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material'

export default function Cargando () {
  return (
    <Card sx={{ display: 'flex', maxWidth: 800, bgcolor: 'var(--fondo)', color: 'var(--titulo)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
        <CardContent>
          <Typography variant='h5' component='div' sx={{ color: 'var(--titulo-resaltado)' }}>
            Cargando...
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <CircularProgress color='inherit' />
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}
