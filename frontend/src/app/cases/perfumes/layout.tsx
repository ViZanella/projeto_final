import{Box, Breadcrumbs, Button, Stack} from '@mui/material';
import AddIcon from "@mui/icons-material/Add"
import { Outlet, useNavigate } from 'react-router-dom';
import PerfumeDataGrid from './datagrid';

    function PerfumesLayout(){
    
        const navigate = useNavigate();

        const handleCreate = () => {
          navigate('/perfumes/new', { replace: true })
        }
      
        return (
          <Stack
            className="page-container"
          >
            <Breadcrumbs title="Cadastro de Perfumes" />
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
      
            <PerfumeDataGrid />
      
            <Outlet />
          </Stack>
        )
      }
export default PerfumesLayout;