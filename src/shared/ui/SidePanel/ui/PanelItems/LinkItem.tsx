import { Link } from 'react-router-dom';

const LinkItem = (props: { to: string; children: string }) => {
    const { to, children } = props;

    return <Link to={to}>{children}</Link>;
};

export default LinkItem;
