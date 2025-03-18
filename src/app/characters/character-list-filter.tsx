import {
  genderOptions,
  speciesOptions,
  statusOptions,
} from '@/assets/selectsOptions'
import { FilterInput } from '@/components/filter-input'
import { FilterSelect } from '@/components/filter-select'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Filter } from 'lucide-react'
import { CharacterFilterDialogContent } from './character-filter-dialog-content'

export function CharacterListFilter() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[1060px] mx-auto flex-wrap md:flex-nowrap">
      <FilterInput className="flex-1 md:flex-auto" />

      <div className="w-full hidden sm:flex gap-4 order-last md:order-none">
        <FilterSelect
          value="species"
          label="Species"
          options={speciesOptions}
        />
        <FilterSelect value="gender" label="Gender" options={genderOptions} />
        <FilterSelect value="status" label="Status" options={statusOptions} />
      </div>

      <Dialog>
        <Button asChild className="cursor-pointer sm:hidden w-full">
          <DialogTrigger>
            <Filter />
          </DialogTrigger>
        </Button>
        <CharacterFilterDialogContent />
      </Dialog>
    </div>
  )
}
