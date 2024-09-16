import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Mail() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">info@example.com</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Send Mail to info@example.ecom</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function Phone() {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">(123) 456-7890</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Make a call to (123) 456-7890</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }
