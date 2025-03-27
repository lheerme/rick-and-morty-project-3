export function getId(link: string) {
  const linkArray = link.split('/')

  return linkArray.slice(-1)[0]
}
