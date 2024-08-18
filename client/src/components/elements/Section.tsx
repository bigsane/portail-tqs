const Section = ({ children, ...rest }: LayoutProps) => {
    return (
        <div {...rest} className='section'>
            {children}
        </div>
    )
}

type LayoutProps = {
    children: string | JSX.Element | JSX.Element[]
}

export default Section
