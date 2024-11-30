import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IperfumeMark } from "../../../@libs/types";
import ActionMenu from "../../componentes/uI/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { PerfumeMarkService } from "../../../services/perfumes-mark.service";


const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Código Identificação',
      resizable: false,
      width: 350
    },
    {
      field: 'name',
      headerName: 'Nome da Marca',
      resizable: false,
      flex: 1
    },
    {
      field: 'action',
      headerName: '',
      resizable: false,
      sortable: false,
      disableColumnMenu: true,
      align: 'right',
      width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <ActionMenu 
          itemId={ params.row.id }
        />
      )
    }
  ];
  
  function PerfumeMarkDataGrid() {
    const location = useLocation();
  
    const [perfumeMark, setPerfumeMark] = useState<IperfumeMark[]>([]);
  
    useEffect(()=> {
        PerfumeMarkService.getAll()
          .then(result => {
            setPerfumeMark(result.data)
          })
          .catch(error => toast.error(String(error)))
    }, [location])
  
    return (
      <Paper
        sx={{
          height: '90%',
          width: '100%'
        }}
      >
  
        <DataGrid
          rows={perfumeMark}
          columns={columns}
          sx={{
            '& .MuiDataGrid-columnSeparator': {
              display: 'none'
            }
          }}
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        />
  
      </Paper>
    )
  }

export default PerfumeMarkDataGrid;