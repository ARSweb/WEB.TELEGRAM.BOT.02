import api from "../api/axios";

export function useAxios() {
  const send = async (address, dataObj) => {
    const formData = new FormData();

    Object.entries(dataObj).forEach(([k, v]) => {
      if (Array.isArray(v)) formData.append(k, JSON.stringify(v));
      else formData.append(k, v);
    });

    await api.post(`/${address}`, formData);
  };

  return { send };
}

