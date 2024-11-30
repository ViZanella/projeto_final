import{Box, Button, Stack} from '@mui/material';
import AddIcon from "@mui/icons-material/Add"
import { Outlet, useNavigate } from 'react-router-dom';
import PerfumeMarkDataGrid from './datagrid';
import BreadCrumb from '../../componentes/uI/bread-crumb';

    function PerfumeMarkLayout(){
 
        const navigate = useNavigate();

        const handleCreate = () => {
          navigate('/perfume-marks/new', { replace: true })
        }
      
        return (
          <Stack
            className="page-container"
          >
            <BreadCrumb title="Cadastro de Marcas" />
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
      
            <PerfumeMarkDataGrid />
      
            <Outlet />
          </Stack>
        )
      }

export default PerfumeMarkLayout;