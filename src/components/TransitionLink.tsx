import { type ReactNode } from 'react';
import { useTransition } from '../context/TransitionContext';

interface Props {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const TransitionLink = ({ to, children, className, onClick, onMouseEnter, onMouseLeave }: Props) => {
  const { transitionTo } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    transitionTo(to);
  };

  return (
    <a href={to} onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </a>
  );
};