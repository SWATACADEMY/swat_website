
export const PrimaryButton = ({children, className, ...rest}) => {
  return (
    <button
    className={`flex whitespace-nowrap  bg-[#CC3C39] hover:opacity-90 active:opacity-80  font-semibold
    ease-in-out transition-all duration-75 px-8 h-10 lg:h-[52px] justify-center  items-center
    text-sm lg:text-base text-white rounded-lg ${className}`}
    {...rest}
    >
        {children}
    </button>
  )
}

export const SecondaryButton = ({children, className, ...rest}) => {
  return (
    <button
    className={`flex  whitespace-nowrap bg-transparent border border-white hover:opacity-90 active:opacity-80  font-semibold
    ease-in-out transition-all duration-75 px-8 h-10 lg:h-[52px] justify-center  items-center
    text-sm lg:text-base text-white rounded-lg ${className}`}
    {...rest}
    >
        {children}
    </button>
  )
}

