import React from "react";
import classnames from "classnames/bind";
import styles from "../style/CSSModule.module.scss";

const cx = classnames.bind(styles);

const CSSModule = () => {
    console.log(styles);
    return (
        // CSS module의 2개 이상의 클래스를 사용하고 싶을 때
        <div className={`${styles.wrapper} ${styles.inverted}`}>
        {/* <div classNmae={cx("wrapper", "inverted")}> */}
            안녕하세요, 저는 <span className="something">CSS Module!!</span>
        </div>
    );
};

export default CSSModule;