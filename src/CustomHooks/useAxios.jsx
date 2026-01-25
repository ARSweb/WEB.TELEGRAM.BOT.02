import api from "../api/axios";

export function useAxios() {
  const send = async (address, dataObj) => {
    const formData = new FormData();

    Object.entries(dataObj).forEach(([k, v]) => {
      if (Array.isArray(v)) formData.append(k, JSON.stringify(v));
      else formData.append(k, v);
    });

    const res = await api.post(`/${address}`, formData);

    if (!res.data?.ok) {
      throw new Error("Backend error");
    }

    return res.data;
  };

  return { send };
}
