import styles from './HamburgerMenu.module.css'

export default function HamburgerMenu({ isOpen, toggleMenu }) {
    return (
        <div
            onClick={toggleMenu}
            className={`${styles.tham} ${styles['tham-e-squeeze']} ${styles['tham-w-6']} ${isOpen ? styles['tham-active'] : ''}`}
        >
            <div className={styles['tham-box']}>
                <div className={styles['tham-inner']} />
            </div>
        </div>
    );
}
