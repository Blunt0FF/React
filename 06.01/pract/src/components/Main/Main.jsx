import styles from './Main.module.css'

export default function Main(props) {
    return (
        <main className={props.theme === 'light' ? styles.light_background : styles.dark_background}>
            <article>
                <h3>SuperTitle</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet </p>
            </article>
            <article>
                <h3>NanoTitle</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor, sit amet</p>
            </article>
        </main>
    )
}