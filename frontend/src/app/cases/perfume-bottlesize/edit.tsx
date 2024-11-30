import PerfumeBottlesizeForm from "./form";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { IperfumeBottlesize } from "../../../@libs/types";
import { toast } from "react-toastify";
import { PerfumeMarkService } from "../../../services/perfumes-mark.service";

function PerfumeBottlesizeEditPage(){
    const params = useParams();

    const [perfumeBottlesize, setPerfumeBottlesize] = useState<IperfumeBottlesize>({
      name: '',
    } as IperfumeBottlesize);
  
    useEffect(() => {
  
      if (params?.id) {
        PerfumeMarkService.getById(params.id)
          .then(result => {
            setPerfumeBottlesize(result.data)
          })
          .catch(error => toast.error(String(error)))
      }
  
    }, [params])
  
    return (
      <PerfumeBottlesizeForm
      perfumeBottlesize={perfumeBottlesize}
      setPerfumeBottlesize={setPerfumeBottlesize}
        showForm={true}
      />
    )
  }
  
export default PerfumeBottlesizeEditPage;