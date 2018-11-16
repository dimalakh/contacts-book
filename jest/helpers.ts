export const generateContactItem = (
  id: number = Math.round(Math.random() * 1000),
  fullName: string = 'Josh Usyk',
  phoneNumber: string = '6084390934',
  position: string = 'Software Engineer'
) => {
  return {
    address: 'Headquarters 1120 N Street Sacramento',
    avatarUrl: './some.jpg',
    fullName,
    id,
    phoneNumber,
    position,
  }
}
