import {
  dimensionsOptions,
  locationsTypeOptions,
} from '@/assets/selectsOptions'
import { FilterInput } from '@/components/filter-input'
import { FilterSelect } from '@/components/filter-select'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Filter } from 'lucide-react'
import { LocationsFilterDialogContent } from './locations-filter-dialog-content'

export function LocationsListFilter() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[1060px] mx-auto flex-wrap md:flex-nowrap">
      <FilterInput className="w-full" />

      <div className="w-full hidden sm:flex gap-4 order-last md:order-none">
        <FilterSelect
          value="type"
          label="Type"
          options={locationsTypeOptions}
        />
        <FilterSelect
          value="dimension"
          label="Dimension"
          options={dimensionsOptions}
        />
      </div>

      <Dialog>
        <Button asChild className="cursor-pointer sm:hidden w-full">
          <DialogTrigger>
            <Filter />
          </DialogTrigger>
        </Button>
        <LocationsFilterDialogContent />
      </Dialog>
    </div>
  )
}
