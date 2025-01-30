import './IconButton.css'

type ButtonType = "forward" | "right" | "left" | "backwards" | "help";

interface IconButtonProps {
  type: ButtonType;
  onClick: () => void;
  width?: string;
  height?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ type, onClick, width = "25%", height = "90px" }) => {
  const buttonIconMap: Record<ButtonType, string> = {
    forward: 'src/assets/reshot-icon-bold-arrow-up-XUMCA9L6S5.svg',
    right: 'src/assets/reshot-icon-bold-arrow-right-RB7XW6DC4Z.svg',
    left: 'src/assets/reshot-icon-bold-arrow-left-TS2DVUZ9WY.svg',
    backwards: 'src/assets/reshot-icon-bold-arrow-down-KDT9R8EHBC.svg',
    help: 'src/assets/reshot-icon-question-VM8X47B5JK.svg'
  };

  return (
    <button
      className={`icon-button ${type}`}
      onClick={onClick}
      style={{
        backgroundImage: `url(${buttonIconMap[type]})`,
        width,
        height,
      }}
    />
  );
};

export default IconButton;