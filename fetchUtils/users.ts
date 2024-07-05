export const getUsers = async () => {
  const response = await fetch("https://reqres.in/api/users");
  return response.json();
};

export const getUser = async (id: number) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  return response.json();
};

export const getUsersWithPagination = async (page: number, perPage: number) => {
  const response = await fetch(
    `https://reqres.in/api/users?page=${page}&per_page=${perPage}`
  );
  return response.json();
};
