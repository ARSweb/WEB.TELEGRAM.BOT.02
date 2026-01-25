import { useContext, useState, useEffect } from "react"
import { MmaDContext } from "./MmaD"
import { useNavigate } from "react-router-dom"
import { useAxios } from "../../CustomHooks/useAxios"
import "./MmaP.css"

const MmaP = () => {
  const [Telegram, setTelegram] = useState(false)
  const Navigator = useNavigate()
  const {
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
    Family, 
} = useContext(MmaDContext)
const {send} = useAxios()

const generateMma = async () => {
  const tg = window.Telegram.WebApp;
  const chatId = tg?.initDataUnsafe?.user?.id;

  if (!chatId) {
    alert("Bu sahifa Telegram orqali ochilishi shart");
    return;
  }

  await send("mma", {
    chatId,
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
    Family,
  });

  tg.showAlert("📄 Hujjat Telegramga yuborildi!");
};


useEffect(() => {
  const tg = window.Telegram?.WebApp;
  if (!tg) return;

  tg.ready();
  tg.expand();

  tg.MainButton.setText("📤 Hujjatni yuborish");
  tg.MainButton.show();

  tg.MainButton.onClick(generateMma);

  return () => tg.MainButton.offClick(generateMma);
}, []);

  
  return (
    <div className="preview-wrap">
       {/* Eslatma */}
       <div className="info-box">
        Bu forma faqat ma’lumotlarni tekshirish uchun. Rasmiy hujjat Word (.docx)
        formatida yaratiladi.
      </div>

      {/* Asosiy karta */}
      <div className="card center">
        <div className="photo-box">
          {Rasm && <img src={URL.createObjectURL(Rasm)} alt="Rasm" />}
        </div>

        <p className="title">{FIO}</p>
        <p><b>Boshlanish sanasi:</b> {Bosh_S}</p>
        <p><b>Fakultet:</b> {Fakultet}</p>
        <p><b>Yo‘nalish:</b> {Yonalish}</p>
        <p><b>Guruh:</b> {Guruh}</p>
      </div>

      {/* Shaxsiy ma’lumotlar */}
      <div className="card">
        <p><b>Tug‘ilgan sana:</b> {Tug_Y}</p>
        <p><b>Tug‘ilgan joy:</b> {Tug_T}</p>
        <p><b>Millat:</b> {Millat}</p>
        <p><b>Passport:</b> {Passport_S}</p>
        <p><b>Berilgan joy:</b> {Passport_I}</p>
        <p><b>Berilgan sana:</b> {Passport_D}</p>
      </div>

      {/* Aloqa */}
      <div className="card">
        <p><b>Telefon:</b> {Tel_M}</p>
        <p><b>Qo‘shimcha tel:</b> {Tel_P}</p>
        <p><b>To'liq Manzili:</b> {Toliq_M}</p>
      </div>

      {/* Qarindoshlar */}
      {Family.map((mbr, i) => (
        <details className="card" key={i}>
          <summary>Qarindosh {i + 1}</summary>
          <p><b>Kim:</b> {mbr.Kim}</p>
          <p><b>FISH:</b> {mbr.FISH}</p>
          <p><b>Tug‘ilgan yil:</b> {mbr.Tug_YJ}</p>
          <p><b>Kasb:</b> {mbr.Kasb}</p>
          <p><b>Manzil:</b> {mbr.Manzil}</p>
          <p><b>Tel:</b> {mbr.Tel_Q}</p>
        </details>
      ))}
      <button className="MPEB" onClick={() => Navigator("/mmaf")}>O'zgartirish</button>
      <button className="MPGB"  onClick={generateMma}>📤 Hujjatni yuborish</button>
    </div>
  )
}

export default MmaP
