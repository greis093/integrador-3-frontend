export const peticionesHttp = async (url, options) => {
  try {
    const res = await fetch(url, options);
    //console.log("res ", res);

    if (!res.ok) throw new Error("No se pudo realizar", res.status);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("peticionesHttp", error);
  }
};
