import Text from '../Text';
import { HeaderProps } from './Header.models';
import { TextSizeType } from '../Text/Text.models';

const Header = (props: HeaderProps) => {
  const { children, color, h, ariaLabel } = props;
  let size: TextSizeType = 'text-4xl';
  switch (h) {
    case 1:
      size = 'text-4xl md:text-5xl';
      break;
    case 2:
      size = 'text-2xl md:text-3xl';
      break;
    case 3:
      size = 'text-xl md:text-2xl';
      break;
    default:
      size = 'text-4xl md:text-5xl';
  }

  return (
    <Text
      color={color}
      bold
      size={size}
      ariaLabel={ariaLabel}
    >
      {children}
    </Text>
  );
};

export default Header;
