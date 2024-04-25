export const patchData = async (id, data) => {
  const token =
    "pat0uHbyykpYkbsGA.6acbfa9e949f3632d070b6b7f726443fff54246c6df73911ef9754eccb772780";
  const url = `https://api.airtable.com/v0/appeJcPDiKfIk03Rc/Table%201/${id}`;
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json; // this returns the patch data object
};

export const postData = async (payload) => {
  const token =
    "pat0uHbyykpYkbsGA.6acbfa9e949f3632d070b6b7f726443fff54246c6df73911ef9754eccb772780";
  const url = "https://api.airtable.com/v0/appeJcPDiKfIk03Rc/Table%201";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const json = await response.json();
  return json;
};

export const deleteData = async (id) => {
  const token =
    "pat0uHbyykpYkbsGA.6acbfa9e949f3632d070b6b7f726443fff54246c6df73911ef9754eccb772780";
  const url = `https://api.airtable.com/v0/appeJcPDiKfIk03Rc/Table%201/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  await response.json();
};
