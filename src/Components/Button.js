import React from "react";
import "../style/Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
    return (
        <button className={classNames("Button", size, color, { outline, fullWidth })} { ...rest }>{ children }</button>
    );
}

Button.defaultProps = {
    size: "medium",
    color: "blue"
};

export default Button;