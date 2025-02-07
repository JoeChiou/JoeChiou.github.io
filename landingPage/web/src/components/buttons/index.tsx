import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"

import './styles.css';

interface IProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> {
}

export const DefaultButton = (props: IProps) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className='defaultButton button'>
      {children}
    </button>
  );
};

export const StoreButton = (props: IProps) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className='defaultButton storeButton button'>
      {children}
    </button>
  );
};
export const GreyButton = (props: IProps) => {
  const { children, ...rest } = props;
  return (
    <button {...rest} className='defaultButton greyButton button'>
      {children}
    </button>
  );
};