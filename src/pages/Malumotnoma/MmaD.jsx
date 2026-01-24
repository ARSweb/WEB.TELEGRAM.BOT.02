import { createContext, useState } from "react";
export const MmaDContext = createContext()
export const MmaDProvider = ({children}) => {
    const [FIO, setFIO] = useState("")
    const [Rasm, setRasm] = useState(null)
    const [Bosh_S, setBosh_S] = useState("")
    const [Fakultet, setFakultet] = useState("")
    const [Yonalish, setYonalish] = useState("")
    const [Guruh, setGuruh] = useState("")
    const [Tug_Y, setTug_Y] = useState("")
    const [Tug_T, setTug_T] = useState("")
    const [Toliq_M, setToliq_M] = useState("")
    const [Millat, setMillat] = useState("")
    const [Passport_S, setPassport_S] = useState("")
    const [Passport_I, setPassport_I] = useState("")
    const [Passport_D, setPassport_D] = useState("")
    const [Tel_M, setTel_M] = useState("")
    const [Tel_P, setTel_P] = useState("")
    const [Tillar, setTillar] = useState("")
    const [Family, setFamily] = useState([
        {Kim: "", FISH: "", Tug_YJ: "", Kasb: "", Manzil: "", Tel_Q: ""}
    ])
    const AddFamilyMbr = ()=>{
        setFamily([...Family,  {Kim: "", FISH: "", Tug_YJ: "", Kasb: "", Manzil: "", Tel_Q: ""}])
    }
    const RemoveFamilyMbr = (i)=> {
        setFamily(p => p.filter((_, index) => index !== i))
    }

    return (
        <MmaDContext.Provider
            value={{
                FIO, setFIO,
                Rasm, setRasm,
                Bosh_S, setBosh_S,
                Fakultet, setFakultet,
                Yonalish, setYonalish,
                Guruh, setGuruh,
                Tug_Y, setTug_Y,
                Tug_T, setTug_T,
                Toliq_M, setToliq_M,
                Millat, setMillat,
                Passport_S, setPassport_S,
                Passport_I, setPassport_I,
                Passport_D, setPassport_D,
                Tel_M, setTel_M,
                Tel_P, setTel_P,
                Tillar, setTillar,
                Family, setFamily,
                AddFamilyMbr,
                RemoveFamilyMbr
            }}>
            {children}
        </MmaDContext.Provider>
    )
}