export const InlineError = ({ text }: { text: string | undefined }) => {
    return (
        <div className= "text-subMain w-full text-xs mt-2 font-medium" >
        <p>
        { text }
        </p>
        </div>
  )
}
