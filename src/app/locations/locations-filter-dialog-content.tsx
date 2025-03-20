import {
  dimensionsOptions,
  locationsTypeOptions,
} from '@/assets/selectsOptions'
import { FilterSelect } from '@/components/filter-select'
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function LocationsFilterDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Filter</DialogTitle>
      </DialogHeader>
      <FilterSelect value="type" label="Type" options={locationsTypeOptions} />
      <FilterSelect
        value="dimension"
        label="Dimension"
        options={dimensionsOptions}
      />
    </DialogContent>
  )
}
