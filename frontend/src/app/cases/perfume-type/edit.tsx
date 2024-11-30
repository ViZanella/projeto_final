import PerfumeTypeForm from "./form";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { IperfumeType } from "../../../@libs/types";
import { toast } from "react-toastify";
import { PerfumeTypeService } from "../../../services/perfumes-type.service";

function PerfumeTypeEditPage(){
    const params = useParams();

    const [perfumeType, setPerfumeType] = useState<IperfumeType>({
      name: ''
    } as IperfumeType);
  
    useEffect(() => {
  
      if (params?.id) {
        PerfumeTypeService.getById(params.id)
          .then(result => {
            setPerfumeType(result.data)
          })
          .catch(error => toast.error(String(error)))
      }
  
    }, [params])
  
    return (
      <PerfumeTypeForm 
        perfumeType={perfumeType}
        setPerfumeType={setPerfumeType}
        showForm={true}
      />
    )
  }
export default PerfumeTypeEditPage;