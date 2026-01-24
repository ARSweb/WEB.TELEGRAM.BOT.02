import { useContext, useState } from "react"
import { MmaDContext } from "./MmaD"
import { useNavigate } from "react-router-dom"
import { MmaVF } from "./MmaVF"
import "./MmaF.css"

const MmaF = () => {
  const Navigator = useNavigate()
  const [errors, setErrors] = useState({})
  const {
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
} = useContext(MmaDContext)
  const CheckForm = ()=> {
    const errs = MmaVF({
      FIO,
      Rasm,
      Bosh_S,
      Fakultet,
      Yonalish,
      Guruh,
      Tug_Y,
      Tug_T,
      Toliq_M,
      Millat,
      Passport_S,
      Passport_I,
      Passport_D,
      Tel_M,
      Tel_P,
      Tillar,
      Family})
    if(Object.keys(errs).length >0){
      setErrors(errs);
      return;
    }
    Navigator("/mmap")
  }

  
  return (
    <div className="MFFB">
      <h3 className="MFMT">Malumotnoma Uchun Formni to'ldiring </h3>
      <form className="MFF">
        <label className="MFL" htmlFor="FIO">
          <span className="MFLT">Familiya Ism Sharf</span>
          <input required className={errors.FIO? "MFFIR":"MFFI"} id="FIO" type="text" value={FIO} onChange={(e)=> setFIO(e.target.value)} />
          {errors.FIO && <small className="errorText">{errors.FIO}</small>}
        </label>
        
        <label className="MFLF" htmlFor="Rasm">
          <span className={errors.Rasm ? "MFLTFR":"MFLTF"}>Rasm Tanlang</span>
          <input required className="MFFF" id="Rasm" type="file" accept="image/*" onChange={(e)=> setRasm(e.target.files[0])} />
          {!Rasm ? (
            <img className="MFLI" src="PPI.webp" alt="Plaseholder" />
          ):(
            <img className="MFLI" src={URL.createObjectURL(Rasm)} alt="Plaseholder" />
          )}
          {errors.Rasm && <small className="errorTextF">{errors.Rasm}</small>}
        </label>
        
        <label className="MFL" htmlFor="Bosh_S">
          <span className="MFLT">Universitetda o'qishni boshlagan sanagizni kiriting</span>
          <input required className={errors.Bosh_S? "MFFIR":"MFFI"} id="Bosh_S" type="date" value={Bosh_S} onChange={(e)=> setBosh_S(e.target.value)} />
          {errors.Bosh_S && <small className="errorText">{errors.Bosh_S}</small>}
        </label>

        <label className="MFL" htmlFor="Fakultet">
          <span className="MFLT">Fakultetingizni yozing</span>
          <input required className={errors.Fakultet? "MFFIR":"MFFI"} id="Fakultet" type="text" value={Fakultet} onChange={(e)=> setFakultet(e.target.value)} />
          {errors.Fakultet && <small className="errorText">{errors.Fakultet}</small>}
        </label>
        
        <label className="MFL" htmlFor="Yonalish">
          <span className="MFLT">Yonalishingizni yozing</span>
          <input required className={errors.Yonalish? "MFFIR":"MFFI"} id="Yonalish" type="text" value={Yonalish} onChange={(e)=> setYonalish(e.target.value)} />
          {errors.Yonalish && <small className="errorText">{errors.Yonalish}</small>}
        </label>
        
        <label className="MFL" htmlFor="Guruh">
          <span className="MFLT">Guruh raqamingizni yozing </span>
          <input required className={errors.Guruh? "MFFIR":"MFFI"} id="Guruh" type="number" value={Guruh} onChange={(e)=> setGuruh(e.target.value)} />
          {errors.Guruh && <small className="errorText">{errors.Guruh}</small>}
        </label>
        
        <label className="MFL" htmlFor="Tug_Y">
          <span className="MFLT">Tug'ilgan sanangizni kiriting</span>
          <input required className={errors.Tug_Y? "MFFIR":"MFFI"} id="Tug_Y" type="date" value={Tug_Y} onChange={(e)=> setTug_Y(e.target.value)} />
          {errors.Tug_Y && <small className="errorText">{errors.Tug_Y}</small>}
        </label>
        
        <label className="MFL" htmlFor="Tug_T">
          <span className="MFLT">Tug'ilgan Tuman yoki Shahringizni kiriting</span>
          <input required className={errors.Tug_T? "MFFIR":"MFFI"} id="Tug_T" type="text" value={Tug_T} onChange={(e)=> setTug_T(e.target.value)} />
          {errors.Tug_T && <small className="errorText">{errors.Tug_T}</small>}
        </label>
        
        <label className="MFL" htmlFor="Toliq_M">
          <span className="MFLT">To'liq manzilingizni kiriting</span>
          <textarea required className={errors.Toliq_M? "MFFIRA":"MFFIA"} placeholder="Viloyat Tuman Shahar Qishloq Mahalla Ko'cha Uy" id="Toliq_M" type="text" value={Toliq_M} onChange={(e)=> setToliq_M(e.target.value)} />
          {errors.Toliq_M && <small className="errorText">{errors.Toliq_M}</small>}
        </label>
        
        <label className="MFL" htmlFor="Millat">
          <span className="MFLT">Millatingizni kiriting</span>
          <input required className={errors.Millat? "MFFIR":"MFFI"} id="Millat" type="text" value={Millat} onChange={(e)=> setMillat(e.target.value)} />
          {errors.Millat && <small className="errorText">{errors.Millat}</small>}
        </label>
        
        <label className="MFL" htmlFor="Passport_S">
          <span className="MFLT">Passport Seriya va raqamini kiriting </span>
          <input required className={errors.Passport_S? "MFFIR":"MFFI"} placeholder="AA1234567" id="Passport_S" type="text" value={Passport_S} onChange={(e)=> setPassport_S(e.target.value)} />
          {errors.Passport_S && <small className="errorText">{errors.Passport_S}</small>}
        </label>
        
        <label className="MFL" htmlFor="Passport_I">
          <span className="MFLT">Passport kim tomonidan berilganini kiriting</span>
          <input required className={errors.Passport_I? "MFFIR":"MFFI"} placeholder="Xonqa Tuman IIB" id="Passport_I" type="text" value={Passport_I} onChange={(e)=> setPassport_I(e.target.value)} />
          {errors.Passport_I && <small className="errorText">{errors.Passport_I}</small>}
        </label>
        
        <label className="MFL" htmlFor="Passport_D">
          <span className="MFLT">Passport berilgan sanani kiriting</span>
          <input required className={errors.Passport_D? "MFFIR":"MFFI"} id="Passport_D" type="date" value={Passport_D} onChange={(e)=> setPassport_D(e.target.value)} />
          {errors.Passport_D && <small className="errorText">{errors.Passport_D}</small>}
        </label>
        
        <label className="MFL" htmlFor="Tel_M">
          <span className="MFLT">Mobile telefon raqamingizni kiriting</span>
          <input required className={errors.Tel_M? "MFFIR":"MFFI"} id="Tel_M" type="tel" value={Tel_M} onChange={(e)=> setTel_M(e.target.value)} />
          {errors.Tel_M && <small className="errorText">{errors.Tel_M}</small>}
        </label>
        
        <label className="MFL" htmlFor="Tel_P">
          <span className="MFLT">Qo'shimcha telefon raqamini kiriting</span>
          <input required className={errors.Tel_P? "MFFIR":"MFFI"} placeholder="Ota yoki Ona" id="Tel_P" type="tel" value={Tel_P} onChange={(e)=> setTel_P(e.target.value)} />
          {errors.Tel_P && <small className="errorText">{errors.Tel_P}</small>}
        </label>
        
        <label className="MFL" htmlFor="Tillar">
          <span className="MFLT">Qaysi chet tillarida gaplasha olasiz, agar bilmasangiz yo'q deb yozing</span>
          <input required className={errors.Tillar? "MFFIR":"MFFI"} placeholder="Ingiliz, Rus, ..." id="Tillar" type="text" value={Tillar} onChange={(e)=> setTillar(e.target.value)} />
          {errors.Tillar && <small className="errorText">{errors.Tillar}</small>}
        </label>

        {/* Family */}
        <h3 className="MFQT">Qarindoshlar haqida malumot</h3>
        
        {Family.map((mbr, i) => (
          <div className="MFQD" key={i}>
            <button className="MFQRB" type="button" onClick={() => RemoveFamilyMbr(i)}>Oila Azosini o'chirish</button>
            <label className="MFLQ" htmlFor="Kim">
              <span className="MFLT">Qarindoshining kimligi (Otasi Oansi Akasi...)</span>
              <input className="MFFIQ" placeholder="Otasi" type="text" value={mbr.Kim} onChange={(e) => {
                const uptd = [...Family];
                uptd[i].Kim = e.target.value;
                setFamily(uptd)
              }} />
            </label>
            <label className="MFLQ" htmlFor="FISH">
              <span className="MFLT">Qarindoshining Familiya Ism Sharfi</span>
              <input className="MFFIQ" type="text" value={mbr.FISH} onChange={(e) => {
                const uptd = [...Family];
                uptd[i].FISH = e.target.value;
                setFamily(uptd)
              }} />
            </label>
            <label className="MFLQ" htmlFor="Tug_J">
              <span className="MFLT">Qarindoshning Tug'ilgan yili va Tumani</span>
              <input className="MFFIQ" placeholder="1982-yil Xonqa Tumani" type="text" value={mbr.Tug_YJ} onChange={(e) => {
                const uptd = [...Family];
                uptd[i].Tug_YJ = e.target.value;
                setFamily(uptd)
              }} />
            </label>
            <label className="MFLQ" htmlFor="Kasb">
              <span className="MFLT">Qarindoshining Kasbi</span>
              <input className="MFFIQ" placeholder="Quruvchi yoki Mavsumiy ishchi yoki ..." type="text" value={mbr.Kasb} onChange={(e) => {
                const uptd = [...Family];
                uptd[i].Kasb = e.target.value;
                setFamily(uptd)
              }} />
            </label>
            <label className="MFLQ" htmlFor="Manzil">
              <span className="MFLT">Qarindoshining to'liq manzili</span>
              <input className="MFFIQ" type="text" value={mbr.Manzil} onChange={(e) => {
                const uptd = [...Family];
                uptd[i].Manzil = e.target.value;
                setFamily(uptd)
              }} />
            </label>
            <label className="MFLQ" htmlFor="Tel_Q">
              <span className="MFLT">Qarindoshining telefon raqami</span>
              <input className="MFFIQ" type="text" value={mbr.Tel_Q} onChange={(e) => {
                const uptd = [...Family];
                uptd[i].Tel_Q = e.target.value;
                setFamily(uptd)
              }} />
            </label>
          </div>
        ))}
        <button className="MFQQ" type="button" onClick={AddFamilyMbr}>Oila Azosi Qo'shish</button>
        <br />
        {errors.Family && <small className="errorText">{errors.Family}</small>}
      </form>
      <button className="MFFNB" onClick={CheckForm}>Namunani Ko'rish</button>
      <button type="button" className="MFFNB" onClick={() => Navigator("/")}>Bosh sahifaga qaytish</button>
      
    </div>
  )
}

export default MmaF
