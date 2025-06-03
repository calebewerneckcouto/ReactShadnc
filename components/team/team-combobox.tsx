"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Role } from "@/app/types/role"


const roles = [
    {
        label: 'Viewer',
        description: 'Can view and comment',
        value: 'viewer'
    },
    {
        label: 'Developer',
        description: 'Can view and edit',
        value: 'developer'
    },

    {
        label: 'Biling',
        description: 'Can view,comment and manage biling',
        value: 'biling'
    },
    {
        label: 'Owner',
        description: 'Admin-level acess to all resources',
        value: 'owner'
    },

];

type Props = {
    value: Role;
    setValue: (newValue: Role) => void;
}


export function ComboboxDemo({ value, setValue }: Props) {
    const [open, setOpen] = useState(false)


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
  variant="outline"
  role="combobox"
  aria-expanded={open}
  className="w-full justify-between"
>
  {value
    ? roles.find((role) => role.value === value)?.label
    : "Select role..."}
  <ChevronsUpDown className="opacity-50 ml-2 h-4 w-4" />
</Button>

            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {roles.map((role) => (
                                <CommandItem
                                    key={role.value}
                                    value={role.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue as Role);
                                        setOpen(false)
                                    }}
                                >
                                    <div> <p>{role.label}</p>
                                        <p>{role.description}</p></div>



                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === role.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
