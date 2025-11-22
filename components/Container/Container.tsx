import css from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};
