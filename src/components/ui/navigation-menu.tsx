import React from 'react';

interface NavigationMenuLinkProps {
    asChild?: boolean;
    children: React.ReactNode;
}

const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({ asChild, children }) => {
    if (asChild) {
        return <>{children}</>;
    }

    return <li>{children}</li>;
};

interface NavigationMenuListProps {
    children: React.ReactNode;
}

const NavigationMenuList: React.FC<NavigationMenuListProps> = ({ children }) => {
    return <ul>{children}</ul>;
};

interface NavigationMenuProps {
    className?: string;
    children: React.ReactNode;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ className, children }) => {
    return <nav className={className}>{children}</nav>;
};

export { NavigationMenuLink, NavigationMenuList, NavigationMenu };
