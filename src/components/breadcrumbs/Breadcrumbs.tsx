import { Link, useLocation } from "react-router-dom"

export const Breadcrumbs = () => {

    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <Link key={crumb} to={currentLink}>{`/ ${crumb} `}</Link>
            )
        });
    
    return (
        <div>
            {crumbs}
        </div>
    )
}