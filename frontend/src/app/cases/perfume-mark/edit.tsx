import PerfumeTypeForm from "./form";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { IperfumeMark} from "../../../@libs/types";
import { toast } from "react-toastify";
import { PerfumeMarkService } from "../../../services/perfumes-mark.service";

function PerfumeMarkEditPage(){
    const params = useParams();

    const [perfumeMark, setPerfumeMark] = useState<IperfumeMark>({
      name: ''
    } as IperfumeMark);
  
    useEffect(() => {
  
      if (params?.id) {
        PerfumeMarkService.getById(params.id)
          .then(result => {
            setPerfumeMark(result.data)
          })
          .catch(error => toast.error(String(error)))
      }
  
    }, [params])
  
    return (
      <PerfumeTypeForm 
      perfumeMark={perfumeMark}
      setPerfumeMark={setPerfumeMark}
        showForm={true}
      />
    )
  }
  
export default PerfumeMarkEditPage;