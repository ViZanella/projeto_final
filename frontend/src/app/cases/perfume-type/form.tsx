import { IperfumeType } from "../../../@libs/types";
import { useState } from "react";
import { PerfumeTypeService } from "../../../services/perfumes-type.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SideForm from "../../componentes/uI/side-form";
import { TextField } from "@mui/material";

type PerfumeTypeFormProp = {
    perfumeType: IperfumeType;
    setPerfumeType: (perfumeType: IperfumeType) => void;
    showForm: boolean;
  }
  function PerfumeTypeForm({
    perfumeType,
    setPerfumeType,
    showForm
  }: PerfumeTypeFormProp) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleSave = () => {
      setLoading(true);
  
      const serviceEvent = (perfumeType.id) ? 
        PerfumeTypeService.update(perfumeType.id, perfumeType) :  
        PerfumeTypeService.create(perfumeType);
  
      serviceEvent
        .then(() => {
          toast.success('Registro atualizado com sucesso!');
          navigate('/perfume-types');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))

    }
    const handleDelete = () => {
      setLoading(true);
  
      if (perfumeType.id) {
        PerfumeTypeService.remove(perfumeType.id)
          .then(() => {
          toast.success('Registro excluído com sucesso!');
          navigate('/perfume-types');
        })
        .catch(error => toast.error(String(error)))
        .finally(() => setLoading(false))
      }
    }
    return (
      <SideForm
        open={showForm}
        title="Cadastro de Tipo de Perfume"
        loading={loading}
        onSave={handleSave}
        {...(perfumeType.id && {onDelete: handleDelete})}
      >
        <TextField 
          fullWidth
          required
          autoFocus
          label="Tipo de Perfume"
          variant="outlined"
          size="small"
          value={perfumeType.name}
          onChange={event => setPerfumeType({...perfumeType, name: event.target.value})}
        />
      </SideForm>
    )
  }
  

export default PerfumeTypeForm;