import React from 'react'

import styles from "./NotFoundBlock.module.scss";

export default function NotFoundBlock() {
    console.log(styles);
    return (
        <div className={styles.root}>
            <span>😔</span>
            <h1>Ничего не найдено</h1>
            <p>Данная страница отсутсвует</p>
        </div>
    )
}
