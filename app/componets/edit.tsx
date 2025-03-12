import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Quantico, Quattrocento } from 'next/font/google';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Edit({quantidade1, id_q }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // update bd
 
  
  
  
  const [quantidade, setquantidade] = useState(quantidade1)
  

      const atualizar = async () => {
          try { 
              console.log("Valor inicial de val1:", quantidade);
                const response = await axios.put('http://localhost:3333/quantidades/', {id_q, quantidade1})

                console.log('erro no codigo', response)

              } 
          catch (error) {
              console.log("Erro ao buscar dados:", error);
          }
      };
      
  
  


  return (
    <div className='w-24 py-2 px-4 rounded-md bg-gray-400'>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='flex justify-center items-center' variant="h6" component="h2">
            Edite o valor
          </Typography>
          <Typography id="modal-modal-description" className='flex justify-center items-center flex-col ' sx={{ mt: 2 }}>
          <input
              type="number"
              className='border-[2px] w-35 h-10 rounded-sm pl-2 mb-3'
              value={quantidade}
              onChange={(e) => {e.target.value}} // Atualiza o valor de quantidade quando o input mudar
            />
            <input type="button" className='border-[2px] w-35 h-10 rounded-sm pl-2' value={'enviar'} onClick={atualizar}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
