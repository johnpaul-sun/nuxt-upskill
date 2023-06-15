export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=OnHDKXHqXUTbgqCjx6YC89GPmkiAKAaJbZ1DbSL6"
  );

  return data;
});
