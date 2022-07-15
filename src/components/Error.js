import { Box, Modal, Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#282828',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 10,
    p: 4,
  };

export default function Error({error, open, updateOpen}){
    return <Modal
    BackdropProps={{ invisible: true }}
    open={open}
    onClose={() => updateOpen(false)}
    aria-labelledby="error-modal"
    >
    <Box sx={style}>
      <Typography id="error-type" variant="h5" component="h2">
        {error.response.data.error}
      </Typography>
      <Typography id="error-message" sx={{ mt: 2 }}>
        {error.response.data.message}
      </Typography>
    </Box>
  </Modal>
}