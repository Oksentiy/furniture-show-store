import { HTMLProps } from 'react';
import cn from 'classnames';
import './styles/pageLink.scss';

export type Props = HTMLProps<HTMLAnchorElement> & { activeBtn?: boolean };

export const PageLink = ({
 className,
 activeBtn,
 disabled,
 children,
 ...otherProps
}: Props) => {
  const customClassName = cn('page-link', className, {
    activeBtn,
    disabled,
  });

  if (disabled) {
    return <span className={customClassName}>{children}</span>;
  }

  return (
    <a
      className={customClassName}
      aria-current={activeBtn ? 'page' : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}