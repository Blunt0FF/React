import { Box, Button } from '@mui/material'

export default function SxExample({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Button
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          padding: 2,
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        SX Styled Button
      </Button>
      {children}
    </Box>
  )
}
