export function validateFamily(Family) {
    // 1️⃣ Kamida 1 ta qarindosh bo‘lishi shart
    if (!Array.isArray(Family) || Family.length < 1) {
      return "Kamida bitta qarindosh ma'lumoti kiritilishi shart";
    }
  
    // 2️⃣ Har bir qarindosh to‘liq to‘ldirilgan bo‘lishi shart
    for (let i = 0; i < Family.length; i++) {
      const mbr = Family[i];
  
      if (
        !mbr.Kim?.trim() ||
        !mbr.FISH?.trim() ||
        !mbr.Tug_YJ?.trim() ||
        !mbr.Kasb?.trim() ||
        !mbr.Manzil?.trim() ||
        !mbr.Tel_Q?.trim()
      ) {
        return `${i + 1}-Qarindosh ma'lumotlari to‘liq kiritilmadi`;
      }
    }
  
    return null; // hammasi joyida
  }
  

export function MmaVF(data){
    const errors = {};
    const TelRx = /^(\+998)?\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    const PassportRx = /^[A-Z]{2}\d{7}$/;
    if(!TelRx.test(data.Tel_M))
        errors.Tel_M = "Telefon raqami noto'g'ri";
    if(!TelRx.test(data.Tel_P))
        errors.Tel_P = "Telefon raqami noto'g'ri";
    if(!PassportRx.test(data.Passport_S))
        errors.Passport_S = "Passport seriya noto'g'ri";
    if(data.FIO == "")
        errors.FIO = "Malumotni kiriting";
    if(data.Fakultet == "")
        errors.Fakultet = "Malumotni kiriting";
    if(data.Yonalish == "")
        errors.Yonalish = "Malumotni kiriting";
    if(data.Guruh == "")
        errors.Guruh = "Malumotni kiriting";
    if(data.Tug_Y == "")
        errors.Tug_Y = "Malumotni kiriting";
    if(data.Tug_T == "")
        errors.Tug_T = "Malumotni kiriting";
    if(data.Toliq_M == "")
        errors.Toliq_M = "Malumotni kiriting";
    if(data.Millat == "")
        errors.Millat = "Malumotni kiriting";
    if(data.Passport_I == "")
        errors.Passport_I = "Malumotni kiriting";
    if(data.Passport_D == "")
        errors.Passport_D = "Malumotni kiriting";
    if(data.Bosh_S == "")
        errors.Bosh_S = "Malumotni kiriting";
    if(data.Rasm == null)
        errors.Rasm = "Rasm tanlang"

    const familyErrors = validateFamily(data.Family)
    if(familyErrors){
        errors.Family = familyErrors
    }

    return errors;
}


  