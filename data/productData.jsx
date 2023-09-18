export const productData = async () => {
  const response = await fetch("http://127.0.0.1:8000/product/", {
    next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
};

export const productDataTopSell = async () => {
  const response = await fetch("https://jahanyadak.iran.liara.run/topsells/", {
    next: { revalidate: 10 },
  });
  const dataTop = await response.json();
  return dataTop;
};

export const productDataLights = async () => {
  const response = await fetch("https://jahanyadak.iran.liara.run/headlight/", {
    next: { revalidate: 10 },
  });
  const lightData = await response.json();
  return lightData;
};

export const productDataLents = async () => {
  const response = await fetch("https://jahanyadak.iran.liara.run/lent/", {
    next: { revalidate: 10 },
  });
  const lentData = await response.json();
  return lentData;
};

export const productDataSepar = async () => {
  const response = await fetch("https://jahanyadak.iran.liara.run/separ/", {
    next: { revalidate: 10 },
  });
  const separData = await response.json();
  return separData;
};

export const payment = async () => {
  const response = await fetch("https://jahanyadak.iran.liara.run/23/pay", {
    next: { revalidate: 10 },
  });
  const payment = await response.json();
  return payment;
};
