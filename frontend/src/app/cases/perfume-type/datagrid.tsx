import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { PerfumeTypeService } from "../../../services/perfumes-type.service";
import { IperfumeType } from "../../../@libs/types";
import ActionMenu from "../../componentes/uI/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Código Identificação',
      resizable: false,
      width: 350
    },
    {
      field: 'name',
      headerName: 'Tipo de Perfume',
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
  
  function PerfumeTypeDataGrid() {
    const location = useLocation();
  
    const [perfumeType, setPerfumeType] = useState<IperfumeType[]>([]);
  
    useEffect(()=> {
        PerfumeTypeService.getAll()
          .then(result => {
            setPerfumeType(result.data)
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
          rows={perfumeType}
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

export default PerfumeTypeDataGrid;