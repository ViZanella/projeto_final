import PerfumeTypeForm from "./form";
import { useState} from "react";
import { IperfumeType } from "../../../@libs/types";

function PerfumeTypeCreatePage(){


    const [perfumeType,setPerfumeType] = useState<IperfumeType>({
        name:  ''
    }as IperfumeType);

    return(
        <PerfumeTypeForm
        perfumeType={perfumeType}
        setPerfumeType={setPerfumeType}
        showForm={true}/>
    )

}
export default PerfumeTypeCreatePage;

