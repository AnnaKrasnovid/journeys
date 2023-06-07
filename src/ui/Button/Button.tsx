import './Button.scss';

type ButtonTypes = "button" | "submit" | "reset" | undefined;
type ButtonSizeTypes = 'xsmall' | 'small' | 'middle' | 'large' | 'xlarge' | 'xxlarge';
type ButtonBorderRadiusTypes = 'none' | 'small' | 'middle' | 'large' | 'xlarge';
type ButtonColorTypes = 'dark' | 'green';

interface ButtonInt {
    text: string,
    type?: ButtonTypes,
    color?: ButtonColorTypes,
    size?: ButtonSizeTypes,
    borderRadius?: ButtonBorderRadiusTypes,
    invert?: boolean,
    border?: boolean,
    shadow?: boolean,
    className?: string,
    callback?: () => void
}

function Button({
    text,
    type = 'button',
    color = 'green',
    size = 'middle',
    invert = false,
    border = false,
    borderRadius = 'large',
    shadow = true,
    className,
    callback
}: ButtonInt) {

    return (
        <button
            type={type}
            className={`
      button
      ${`button_color_${color}`}
      ${`button_size_${size}`}
      ${invert ? `button_invert` : ''}
      ${border ? `button_border` : ''}
      ${`button_border-radius_${borderRadius}`}
      ${shadow ? (color === 'green' ? 'button_shadow_green' : 'button_shadow_dark') : ''}
      ${className}
      `}
            onClick={callback}
        >
            {text}
        </button>
    )
}

export default Button;