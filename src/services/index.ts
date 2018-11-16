export const fetchContacts = async () => {
  try {
    const res = await fetch(process.env.API_BASE + '/contacts')
    return res.json()
  } catch (err) {
    throw err
  }
}
