import styles from './navigation.module.css';

const navigation = [
    {
        id: 0,
        class: styles.about,
        title: 'Обо мне',
        href: '#about-me'
    },
    {
        id: 1,
        class: styles.skills,
        title: 'Мои навыки',
        href: '#my-skills'
    },
    {
        id: 2,
        class: styles.projects,
        title: 'Проекты',
        href: '#my-projects'
    },
    {
        id: 3,
        class: styles.contacts,
        title: 'Контакты',
        href: '#contacts'
    }
]

const NavPage = () => {
    return (
        <nav className={styles.nav}>
            {navigation.map((item) => (
                <a key={item.id} href={item.href} className={item.class}>
                    <div></div>
                    <p>{item.title}</p>
                </a>
            ))}
        </nav>
    )
}

export default NavPage;