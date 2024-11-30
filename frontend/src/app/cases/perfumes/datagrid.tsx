import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Iperfume } from "../../../@libs/types";
import ActionMenu from "../../componentes/uI/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { PerfumeService } from "../../../services/perfume.service";
import { FormattedNumber, IntlProvider } from "react-intl";

const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Código Identificação',
      resizable: false,
      width: 350
    },
    {
      field: 'type',
      headerName: 'Tipo Perfume',
      resizable: false,
      width: 160,
      renderCell: (params: GridRenderCellParams) => (
        <>{params.row.type.name}</>
      )
    },
    {
      field: 'bottle',
      headerName: 'Tamanho do frascoo',
      resizable: false,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <>{params.row.bottlesize.name}</>
      )
    },
    {
      field: 'price',
      headerName: 'Valor do produto',
      resizable: false,
      width: 120,
      renderCell: (params: GridRenderCellParams) => (
        <IntlProvider locale="pt-BR">
          <FormattedNumber 
            value={params.row.perfumeprice} 
            style="currency"
            currency="BRL"
          />
        </IntlProvider>
      )
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
  
  function PerfumeDataGrid() {
    const location = useLocation();
  
    const [perfume, setPerfume] = useState<Iperfume[]>([]);
  
    useEffect(()=> {
        PerfumeService.getAll()
          .then(result => {
            setPerfume(result.data)
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
          rows={perfume}
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

export default PerfumeDataGrid;