import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SideForm from "../../componentes/uI/side-form";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { PerfumeBottlesizeService } from "../../../services/perfumes-bottlesize.service";
import { IperfumeBottlesize, IperfumeMark } from "../../../@libs/types";
import { PerfumeMarkService } from "../../../services/perfumes-mark.service";



type PerfumeBottlesizeFormProps = {
    perfumeBottlesize: IperfumeBottlesize;
    setPerfumeBottlesize: (perfumeBottlesize: IperfumeBottlesize) => void;
    showForm: boolean;
  }
  function PerfumeBottlesizeForm({
    perfumeBottlesize,
    setPerfumeBottlesize,
    showForm
  }: PerfumeBottlesizeFormProps) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
  
    const [marks, setMarks] = useState<IperfumeMark[]>([]);
  
    useEffect(() => {
        PerfumeMarkService.getAll()
        .then(result => {
          setMarks(result.data)
        })
        .catch(error => toast.error(String(error)))
    }, [])
  
    const handleSave = () => {
      setLoading(true);
  
      const serviceEvent = (perfumeBottlesize.id) 
        ? PerfumeBottlesizeService.update(perfumeBottlesize.id, perfumeBottlesize) 
        : PerfumeBottlesizeService.create(perfumeBottlesize);
  
      serviceEvent
        .then(() => {
          toast.success('Registro atualizado com sucesso!');
          navigate('/perfume-bottlesizes');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
    const handleDelete = () => {
      setLoading(true);
  
      if (perfumeBottlesize.id) {
        PerfumeBottlesizeService.remove(perfumeBottlesize.id)
          .then(() => {
            toast.success('Registro excluído com sucesso!');
            navigate('/perfume-bottlesizes');
          })
          .catch(error => toast.error(String(error)))
          .finally(() => setLoading(false))
      }
    }
  
    const handleChange = (event: SelectChangeEvent) => {
      const { value } = event.target;
  
      const selected = marks.find(item => item.id === value)
      setPerfumeBottlesize({...perfumeBottlesize, mark: selected!})
    }
  
    return (
      <SideForm
        open={showForm}
        title="Cadastro dos tamanhos de frascos"
        loading={loading}
        onSave={handleSave}
        {...(perfumeBottlesize.id && {onDelete: handleDelete})}
      >
        <FormControl 
          fullWidth 
          size="small" 
          margin="normal" 
          required
        >
        <InputLabel>Marca</InputLabel>
        <Select
          value={perfumeBottlesize.mark?.id || ''}
          onChange={handleChange}
          label="Marca"
        >
          {marks.map((mark) => (
            <MenuItem key={mark.id} value={mark.id}>
              {mark.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  
        <TextField 
          fullWidth
          required
          label="Tamanho do perfume"
          variant="outlined"
          size="small"
          value={perfumeBottlesize.name}
          onChange={event => setPerfumeBottlesize({...perfumeBottlesize, name: event.target.value})}
        />
      </SideForm>
    )
  }
  

export default PerfumeBottlesizeForm;