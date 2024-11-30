import PerfumeForm from "./form";
import {useState} from "react";
import { Iperfume } from "../../../@libs/types";

function PerfumeCreatePage(){

    const [perfume, setPerfume] = useState<Iperfume>({
        name: '',
        description: '',
        photo: '',
        value: 0,
        type: {},
        bottlesize: {}
      } as Iperfume);
    
      return (
        <PerfumeForm 
        perfume={perfume}
        setPerfume={setPerfume}
        showForm={true}
        />
      )
    }
export default PerfumeCreatePage;