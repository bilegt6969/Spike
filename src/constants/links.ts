import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}
type Item = {
    href: string;
    label: string;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/campaigns",
        label: "Due today",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "New cards",
        icon: LineChartIcon
    },
    // {
    //     href: "/dashboard/posts",
    //     label: "settings",
    //     icon: MessageSquareTextIcon
    // },
    // {
    //     href: "/dashboard/engagement",
    //     label: "Engagement",
    //     icon: UsersIcon
    // },
    // {
    //     href: "/dashboard/billing",
    //     label: "Billing",
    //     icon: CreditCardIcon
    // },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: SettingsIcon
    },
];

export const SIDEBAR_ITEMS: Item[] = [
    {
        href: "/Item1",
        label: "11.1"
    },
    {
        href: "/Item2",
        label: "11.2",
    },
    {
        href: "/Item3",
        label: "11.3",
    },
    {
        href: "/Item4",
        label: "11.4",
    },
];

export const FOOTER_LINKS = [
    {
        title: "Product",
        links: [
            { name: "Home", href: "/" },
            { name: "Features", href: "/" },
            { name: "Pricing", href: "/" },
            { name: "Contact", href: "/" },
            { name: "Download", href: "/" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Help Center", href: "/help-center" },
            { name: "Community", href: "/community" },
            { name: "Guides", href: "/guides" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    },
    {
        title: "Developers",
        links: [
            { name: "API Docs", href: "/api-docs" },
            { name: "SDKs", href: "/sdks" },
            { name: "Tools", href: "/tools" },
            { name: "Open Source", href: "/open-source" },
            { name: "Changelog", href: "/changelog" },
        ],
    },
];
