import { Iperfume, IperfumeBottlesize, IperfumeType } from "../../../@libs/types";
import { ChangeEvent, useEffect, useState } from "react";
import { PerfumeTypeService } from "../../../services/perfumes-type.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SideForm from "../../componentes/uI/side-form";
import { PerfumeBottlesizeService } from "../../../services/perfumes-bottlesize.service";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { PerfumeService } from "../../../services/perfume.service";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';

type PerfumeFormProp = {
  perfume: Iperfume;
  setPerfume: (perfume: Iperfume) => void;
  showForm: boolean;
}
function PerfumeForm({
  perfume,
  setPerfume,
  showForm
}: PerfumeFormProp) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [perfumeType, setPerfumeType] = useState<IperfumeType[]>([]);
  const [perfumeBottlesize, setPerfumeBottlesize] = useState<IperfumeBottlesize[]>([]);

  useEffect(()=>{
    PerfumeTypeService.getAll()
      .then(result => {
        setPerfumeType(result.data)
      });

    PerfumeBottlesizeService.getAll()
      .then(result => {
        setPerfumeBottlesize(result.data)
      })      
  },[]);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (perfume.id) 
      ? PerfumeService.update(perfume.id, perfume) 
      : PerfumeService.create(perfume);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/perfumes');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
  }
  const handleDelete = () => {
    setLoading(true);

    if (perfume.id) {
      PerfumeService.remove(perfume.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/perfumes');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }

  const handleChangeType = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = perfumeType.find(item => item.id === value)
    
    setPerfume({...perfume, type: seleted!})
  }

  const handleChangeBottlesize = (event: SelectChangeEvent) => {
    const {value} = event.target;
    const seleted = perfumeBottlesize.find(item => item.id === value)
    
    setPerfume({...perfume, bottlesize: seleted!})
  }

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const {files} = event.target;

    setLoading(true);

    if (files && files[0]) {
      const file = files[0];

      PerfumeService.upload(file)
        .then(result => {
          if (result.data) {
            const { fullPath } = result.data;
            setPerfume({ ...perfume, photo: fullPath })
          }
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Perfumes"
      loading={loading}
      onSave={handleSave}
      {...(perfume.id && {onDelete: handleDelete})}
    >
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-type">Tipo de Perfume</InputLabel>
        <Select
          labelId="select-type"
          label="Tipo de Perfume"
          value={perfume.type.id || ''}
          onChange={handleChangeType}
        >
          {perfumeType.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
       fullWidth
       size="small"
      >
        <InputLabel id="select-model">Tamanho do frasco </InputLabel>
        <Select
          labelId="select-model"
          label="Tamanho do frasco "
          value={perfume.bottlesize.id || ''}
          onChange={handleChangeBottlesize}
        >
          {perfumeBottlesize.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <Stack
        direction="row"
        gap={1}
      >
        <TextField 
          fullWidth
          required
          label="Valor do produto"
          variant="outlined"
          size="small"
          value={perfume.perfumeprice}
          onChange={event => setPerfume({...perfume, perfumeprice: Number(event.target.value)})}
        />
      </Stack>
      <TextField       
        fullWidth
        required
        multiline
        rows={4}
        label="Nome do perfume e descrição da fragancia"
        variant="outlined"
        size="small"
        value={perfume.description}
        onChange={event => setPerfume({...perfume, description: event.target.value})}
      />
      
      <fieldset className="form-fieldset">
        <legend>
          <Typography
            variant="caption"
            sx={{
              color: 'rgba(0,0,0,0,6)'
            }}
          >
            Foto do perfume
          </Typography>
        </legend>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
          gap="1rem"
        >
          {perfume.photo && (
            <img 
              alt={perfume.bottlesize.name} 
              src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${perfume.photo}`} 
              style={{
                width: '320px'
              }}
            />
          )}
          <LoadingButton
            variant="outlined"
            component="label"
            loading={loading}
          >
            <BackupOutlinedIcon 
              sx={{
                marginRight: '1rem'
              }} 
            />
            Escolher Imagem
            <input type="file" hidden onChange={handleChangeFile} />
          </LoadingButton>
        </Stack>
      </fieldset>
    </SideForm>
  )
}

export default PerfumeForm;
