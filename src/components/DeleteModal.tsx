import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal(
  {
    open,
    toggle,
    handleDelete
  }:
  {
    open: boolean;
    toggle: ()=>void;
    handleDelete: ()=>void;
  }){
    return(
      <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Are you sure that wanna delete this item?
          </Typography>
          <Box  sx={{
                textAlign: 'center',
                margin: 2,
              }}>
            <Button 
            
              variant = "contained" 
              onClick={handleDelete} 
              sx={{
                textAlign: 'center',
              }}>
              Delete
            </Button>

            <Button 
              variant = "outlined" 
              onClick={toggle} sx={{
                marginLeft: 2,
              }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
    ) 
};
