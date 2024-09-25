import React from 'react'
import Cargando from './Cargando'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'

export default function AnimeCard ({ animeData, title, imgUrl, synopsis, episodes, year, rating }) {
  return (
    <>
      <h1 style={{ color: 'white', textAlign: 'center' }}>RandomAni</h1>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4, padding: 2 }}>
        {animeData
          ? (
            <Card
              sx={{
                display: 'flex',
                maxWidth: 800,
                width: '100%', // Ajusta el ancho para pantallas pequeñas
                bgcolor: 'var(--fondo)',
                color: 'var(--titulo)',
                border: '1px solid gray',
                flexDirection: { xs: 'column', md: 'row' } // Cambia la dirección en pantallas pequeñas
              }}
            >
              <CardMedia
                component='img'
                sx={{
                  width: { xs: '100%', md: 300 } // Imagen 100% de ancho en pantallas pequeñas, 300px en pantallas medianas o más grandes
                }}
                image={imgUrl}
                alt={title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                <CardContent>
                  <Typography variant='h5' component='div' sx={{ color: 'var(--titulo-resaltado)' }}>
                    {title}
                  </Typography>
                  <Typography variant='body2' sx={{ color: 'var(--texto)', marginTop: 2 }}>
                    {synopsis}
                  </Typography>
                  <Box sx={{ display: 'flex', marginTop: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Typography variant='body2' sx={{ marginRight: { xs: 0, md: 2 }, marginBottom: { xs: 1, md: 0 } }}>
                      <b>Episodes:</b> {episodes}
                    </Typography>
                    <Typography variant='body2' sx={{ marginRight: { xs: 0, md: 2 }, marginBottom: { xs: 1, md: 0 } }}>
                      <b>Year:</b> {year}
                    </Typography>
                    <Typography variant='body2'>
                      <b>Rating:</b> {rating}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Card>
            )
          : (
            <Cargando />
            )}
      </Box>
    </>
  )
}
