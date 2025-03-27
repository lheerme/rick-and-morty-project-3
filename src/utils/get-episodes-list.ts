import { getId } from './get-id'

export function getEpisodesList(list: string[]) {
  const idList = []

  // biome-ignore lint/style/useConst: <explanation>
  for (let id of list) {
    idList.push(Number(getId(id)))
  }

  return idList
}
