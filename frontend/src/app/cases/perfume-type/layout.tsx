import { Box, Button, Stack } from '@mui/material';
import AddIcon from "@mui/icons-material/Add"
import { Outlet, useNavigate } from 'react-router-dom';
import PerfumeTypeDataGrid from './datagrid';
import BreadCrumb from '../../componentes/uI/bread-crumb';

function PerfumesTypeLayout() {

    const navigate = useNavigate();

    const handleCreate = () => {
      navigate('/perfume-types/new', { replace: true })
    }
  
    return (
      <Stack
        className="page-container"
      >
        <BreadCrumb title="Cadastro dos Tipos de Perfume" />
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
  
        <PerfumeTypeDataGrid />
  
        <Outlet />
      </Stack>
    )
  }
  
export default PerfumesTypeLayout;