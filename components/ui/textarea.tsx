import * as React from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[100px] w-full rounded-xl border border-brand-4 bg-white px-4 py-3 text-sm',
          'placeholder:text-brand-2',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-5 focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'resize-none transition-colors duration-200',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
