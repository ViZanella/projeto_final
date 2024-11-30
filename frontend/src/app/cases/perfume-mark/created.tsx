import PerfumeMarkForm from "./form";
import { useState} from "react";
import { IperfumeMark } from "../../../@libs/types";

function PerfumeMarkCreatePage(){


    const [perfumeMark, setPerfumeMark] = useState<IperfumeMark>({
        name:  ''
    }as IperfumeMark);

    return(
        <PerfumeMarkForm
        perfumeMark= {perfumeMark}
        setPerfumeMark={setPerfumeMark}
        showForm={true}/>
    )

}
export default PerfumeMarkCreatePage;