export function paramsForUser(item) {
  return {
    id: item?.id,
    name: item?.name,
    username: item?.username,
    phone: item?.phone,
    email: item?.email,
    webside: item?.wedside,
    bs: item?.company?.bs,
    catchPhrase: item?.company?.catchPhrase,
    companyName: item?.company?.name,
    street: item?.address?.street,
    suite: item?.address?.suite,
    city: item?.address?.city,
    zipcode: item?.address?.zipcode,
  };
}
