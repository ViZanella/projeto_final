import PerfumeForm from "./form";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Iperfume } from "../../../@libs/types";
import { toast } from "react-toastify";
import { PerfumeService } from "../../../services/perfume.service";

function PerfumeEditPage(){
    const params = useParams();

    const [perfume, setPerfume] = useState<Iperfume>({
        name: '',
        description: '',
        photo: '',
        value: 0,
        type: {},
        bottlesize: {}
    } as Iperfume);
  
    useEffect(() => {
  
      if (params?.id) {
        PerfumeService.getById(params.id)
          .then(result => {
            setPerfume(result.data)
          })
          .catch(error => toast.error(String(error)))
      }
  
    }, [params])
  
    return (
      <PerfumeForm 
        perfume={perfume}
        setPerfume={setPerfume}
        showForm={true}
      />
    )
  }
export default PerfumeEditPage;