import { Link } from "./routerExport";

interface RouterLinkProps {
  className?: string;
  to: string;
  children: React.ReactNode;
}

const RouterLink: React.FC<RouterLinkProps> = ({
  to,
  className,
  children,
}) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default RouterLink;
