import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon
} from 'vue-tabler-icons';
import { usePage } from '@inertiajs/vue3';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    route?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
    param?: Object;
}

const sidebarItem: menu[] = [
    // { header: 'Home' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        route: 'dashboard'
    },
    {
        title: 'Team Settings',
        icon: UserPlusIcon,
        route: 'teams.show',
    },
    {
        title: 'Create Team',
        icon: UserPlusIcon,
        route: 'teams.create'
    },
];

export default sidebarItem;
