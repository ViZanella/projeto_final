import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SideForm from "../../componentes/uI/side-form";
import { TextField } from "@mui/material";
import { IperfumeMark } from "../../../@libs/types";
import { PerfumeMarkService } from "../../../services/perfumes-mark.service";

type PerfumeMarkFormProps = {
    perfumeMark: IperfumeMark;
    setPerfumeMark:(perfumeMark: IperfumeMark) => void;
    showForm: boolean;
  }

  function PerfumeMarkForm({
    perfumeMark,
    setPerfumeMark,
    showForm
  }: PerfumeMarkFormProps) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleSave = () => {
      setLoading(true);
  
      const serviceEvent = (perfumeMark.id) ? 
      PerfumeMarkService.update(perfumeMark.id, perfumeMark) :  
      PerfumeMarkService.create(perfumeMark);
  
      serviceEvent
        .then(() => {
          toast.success('Registro atualizado com sucesso!');
          navigate('/perfume-marks');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
    }
    const handleDelete = () => {
      setLoading(true);
  
      if (perfumeMark.id) {
        PerfumeMarkService.remove(perfumeMark.id)
          .then(() => {
          toast.success('Registro excluído com sucesso!');
          navigate('/perfume-marks');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
      }
    }
    return (
      <SideForm
        open={showForm}
        title="Cadastro da Marca"
        loading={loading}
        onSave={handleSave}
        {...(perfumeMark.id && {onDelete: handleDelete})}
      >
        <TextField 
          fullWidth
          required
          autoFocus
          label="Nome da Marca"
          variant="outlined"
          size="small"
          value={perfumeMark.name}
          onChange={event => setPerfumeMark({...perfumeMark, name: event.target.value})}
        />
      </SideForm>
    )
  }

export default PerfumeMarkForm;