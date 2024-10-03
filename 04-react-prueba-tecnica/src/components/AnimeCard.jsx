import React from 'react'
import Cargando from './Cargando'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'

export default function AnimeCard ({ animeData, title, imgUrl, synopsis, episodes, year, rating, url }) {
  return (
    <>
      <Typography
        variant='h3'
        sx={{
          color: 'transparent',
          alignSelf: 'center',
          justifySelf: 'center',
          fontFamily: 'system-ui, sans-serif',
          fontSize: { xs: '1.5rem', md: '3rem' },
          fontWeight: 'bold',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(to right, #94a3b8, #64748b)'
        }}
      >
        RandomAni
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4, padding: 2 }}>
        {animeData
          ? (
            <Card
              sx={{
                display: 'flex',
                maxWidth: { xs: 300, md: 800 },
                maxHeight: { xs: 600, md: 450 },
                width: '100%',
                bgcolor: 'var(--fondo)',
                color: 'var(--titulo)',
                border: '1px solid gray',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'flex-start' }
              }}
            >
              <CardMedia
                component='img'
                sx={{
                  width: { xs: '90%', md: 300 },
                  height: { xs: 250, md: 450 },
                  maxHeight: { xs: 327, md: 450 },
                  padding: { xs: 1 },
                  objectFit: 'contain',
                  margin: { xs: '0 auto', md: 0 }
                }}
                alt={title}
                src={imgUrl}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
                <CardContent>
                  <Typography
                    variant='h5'
                    component='div'
                    sx={{
                      color: 'var(--titulo-resaltado)',
                      fontSize: { xs: 18, md: 24 }
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'var(--texto)',
                      fontSize: { xs: 9, md: 14 },
                      marginTop: 2,
                      textAlign: 'justify',
                      maxHeight: { xs: 150, md: 200 },
                      overflow: 'auto'
                    }}
                  >
                    {synopsis}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      marginTop: 2,
                      flexDirection: { xs: 'row', md: 'row' },
                      flexWrap: { xs: 'wrap', md: 'nowrap' },
                      gap: 1
                    }}
                  >
                    <Typography
                      variant='body2'
                      sx={{
                        marginRight: { xs: 1, md: 2 },
                        marginBottom: { xs: 0, md: 0 },
                        fontSize: { xs: 12, md: 14 }
                      }}
                    >
                      <b>Episodes:</b> {episodes}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        marginRight: { xs: 1, md: 2 },
                        marginBottom: { xs: 0, md: 0 },
                        fontSize: { xs: 12, md: 14 }
                      }}
                    >
                      <b>Year:</b> {year}
                    </Typography>
                    <Typography
                      variant='body2'
                      xs={{
                        marginRight: { xs: 1, md: 2 },
                        marginBottom: { xs: 0, md: 0 },
                        fontSize: { xs: 12, md: 14 }
                      }}
                    >
                      <b>Rating:</b> {rating}
                    </Typography>
                    <Typography
                      variant='body2'
                      xs={{
                        marginRight: { xs: 1, md: 2 },
                        marginBottom: { xs: 0, md: 0 },
                        fontSize: { xs: 12, md: 14 }
                      }}
                    >
                      <b>Link:</b> <a href={url} style={{ color: '#4da7ff' }}>Click Here :D</a>
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
