import {
  genderOptions,
  speciesOptions,
  statusOptions,
} from '@/assets/selectsOptions'
import { FilterSelect } from '@/components/filter-select'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function CharacterFilterDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Filter</DialogTitle>
      </DialogHeader>
      <FilterSelect value="species" label="Species" options={speciesOptions} />
      <FilterSelect value="gender" label="Gender" options={genderOptions} />
      <FilterSelect value="status" label="Status" options={statusOptions} />
    </DialogContent>
  )
}
