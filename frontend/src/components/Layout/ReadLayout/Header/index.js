import classNames from "classnames/bind" 


import styles from "./Header.module.scss"
import Setting from "../components/Setting"
import Title from "../components/Title"

const cx= classNames.bind(styles)

function Header() {
    return <div className={cx('header')}>
        <div></div>
        <Title name="Võ Đang Kỳ Hiệp" chapter="451"/>
        <Setting/>
         </div>;
}

export default Header;