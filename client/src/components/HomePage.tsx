import Layout from './Layout'
import ReactFullpage from '@fullpage/react-fullpage'
import Section from './elements/Section'
import NAVS from '../constants/nav'

const HomeSection = ({ title }: HomeSectionProps) => {
    return <h1>{title}</h1>
}

const ContactSection = ({ title }: ContactSectionProps) => {
    return (
        <>
            <h1>{title}</h1>
            <p>s</p>
        </>
    )
}

const SectionFactory = ({ menuanchor, title }: SectionFactoryProps) => {
    switch (menuanchor) {
        case 'home':
            return <HomeSection title={title} />
        case 'contact':
            return <ContactSection title={title} />

        default:
            return <h1>{title}</h1>
    }

    return null
}

const HomePage = () => {
    return (
        <Layout>
            <ReactFullpage
                menu='#tqs-navbar'
                anchors={NAVS.map(({ menuanchor }) => menuanchor)}
                navigationTooltips={NAVS.map(({ title }) => title)}
                navigation
                credits={{ enabled: false, label: 'Made with fullPage.js', position: 'right' }}
                sectionsColor={NAVS.map(({ color }) => color)}
                controlArrows={true}
                render={() => (
                    <ReactFullpage.Wrapper>
                        {NAVS.map(({ key, menuanchor, title }) => (
                            <Section key={key}>
                                <SectionFactory key={key} menuanchor={menuanchor} title={title} />
                            </Section>
                        ))}
                    </ReactFullpage.Wrapper>
                )}
            />
        </Layout>
    )
}

type SectionFactoryProps = {
    menuanchor: string
    title: string
}

type HomeSectionProps = {
    title: string
}

type ContactSectionProps = {
    title: string
}

export default HomePage
