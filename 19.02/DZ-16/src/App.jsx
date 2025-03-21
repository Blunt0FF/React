import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import './App.css';

function App() {

  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    alert('Ну как же так? Давай продолжим!');
  };

  const handleContinue = () => {
    alert('Молодец!');
    handleCloseDialog();
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };


  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Material UI
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm" sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать!
        </Typography>
        <Typography paragraph>
    Я хочу сыграть с тобой в игру
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Подтверждение</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены, что хотите продолжить?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleCancel} color="primary">
        Отмена
          </Button>
          <Button onClick={handleContinue} color="primary" autoFocus>
            Продолжить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;