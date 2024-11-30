import{Box, Button, Stack} from '@mui/material';
import AddIcon from "@mui/icons-material/Add"
import { Outlet, useNavigate } from 'react-router-dom';
import PerfumeBottlesizeDataGrid from './datagrid';
import BreadCrumb from '../../componentes/uI/bread-crumb';

    function PerfumeBottlesizeLayout(){
    
        const navigate = useNavigate();

        const handleCreate = () => {
          navigate('/perfume-bottlesizes/new', { replace: true })
        }
      
        return (
          <Stack
            className="page-container"
          >
            <BreadCrumb title="Cadastro tamanhos de fasco " />
            <Box
              display="flex"
              width="100%"
              justifyContent="end"
              marginBottom="1rem"
            >
              <Button
                variant="contained"
                onClick={handleCreate}
              >
                <AddIcon />
                Adicionar
              </Button>
            </Box>
      
            <PerfumeBottlesizeDataGrid/>
      
            <Outlet />
          </Stack>
        )
      }
      

export default PerfumeBottlesizeLayout;