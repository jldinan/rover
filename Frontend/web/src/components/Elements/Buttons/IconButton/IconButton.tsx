import classes from './IconButton.module.css'

export const ButtonTypes = {
  ArrowUp: "arrow_up",
  ArrowRight: "arrow_right",
  ArrowLeft: "arrow_left",
  ArrowDown: "arrow_down",
  Help: "help",
} as const;

export type ButtonType = typeof ButtonTypes[keyof typeof ButtonTypes];

interface IconButtonProps {
  type: ButtonType;
  onClick: () => void;
  width?: string;
  height?: string; 
}

const IconButton: React.FC<IconButtonProps> = ({ type, onClick, width = "25%", height = "90px" }) => {
  const buttonIconMap: Record<ButtonType, string> = {
    arrow_up: 'src/assets/icons/icon-arrow_up.svg',
    arrow_right: 'src/assets/icons/icon-arrow_right.svg',
    arrow_left: 'src/assets/icons/icon-arrow_left.svg',
    arrow_down: 'src/assets/icons/icon-arrow_down.svg',
    help: 'src/assets/icons/icon-help.svg'
  };

  return (
    <button
      className={`${classes['icon-button']}`}
      onClick={onClick}
      aria-label={type + " button"}
      style={{
        backgroundImage: `url(${buttonIconMap[type]})`,
        width,
        height,
      }}
    />
  );
};

export default IconButton;