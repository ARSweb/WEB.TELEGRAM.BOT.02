import api from "../api/axios";

export function useAxios() {
  const send = async (address, dataObj) => {
    const formData = new FormData();

    Object.entries(dataObj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value);
      }
    });

    const res = await api.post(`/${address}`, formData, {
      responseType: "blob",
    });

    return res.data;
  };

  return { send };
}
