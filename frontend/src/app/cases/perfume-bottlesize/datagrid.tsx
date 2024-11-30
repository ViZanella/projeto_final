import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import ActionMenu from "../../componentes/uI/action-menu";
import { toast } from "react-toastify";
import { PerfumeBottlesizeService } from "../../../services/perfumes-bottlesize.service";
import { useLocation } from "react-router-dom";
import { IperfumeBottlesize } from "../../../@libs/types";


const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Código Identificação',
      resizable: false,
      width: 350
    },
    {
      field: 'mark',
      headerName: 'Nome da Marca',
      resizable: false,
      width: 250,
      renderCell: (params: GridRenderCellParams) => (<>{params.row.mark.name}</>)
    },
    {
      field: 'name',
      headerName: 'Nome do perfume',
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
  
  function PerfumeBottlesizeDataGrid() {
    const location = useLocation();
  
    const [perfumeMarks, setPerfumeMarks] = useState<IperfumeBottlesize[]>([]);
  
    useEffect(()=> {
        PerfumeBottlesizeService.getAll()
          .then(result => {
            setPerfumeMarks(result.data)
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
          rows={perfumeMarks}
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
export default PerfumeBottlesizeDataGrid;