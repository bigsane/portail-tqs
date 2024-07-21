import NavBar from './NavBar'

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

type LayoutProps = {
    children: string | JSX.Element | JSX.Element[]
}

export default Layout
