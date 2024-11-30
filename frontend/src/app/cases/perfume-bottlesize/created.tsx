import PerfumeBottlesizeForm from "./form";
import { useState} from "react";
import { IperfumeBottlesize } from "../../../@libs/types";

function PerfumeBottlesizeCreatePage(){


    const [perfumeBottlesize,setPerfumeBottlesize] = useState<IperfumeBottlesize>({
        name: '',
    } as IperfumeBottlesize);

    return(
        <PerfumeBottlesizeForm
        perfumeBottlesize={perfumeBottlesize}
        setPerfumeBottlesize={setPerfumeBottlesize}
        showForm={true}/>
    )
}
export default PerfumeBottlesizeCreatePage;