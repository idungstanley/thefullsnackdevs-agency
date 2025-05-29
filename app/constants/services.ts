import { Service } from '../types';

export const services: Service[] = [
    {
        id: 1,
        title: 'Web Development',
        description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js. From simple landing pages to complex SaaS platforms.',
        icon: 'Code',
        path: '/services/web-development',
    },
    {
        id: 2,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android using React Native, Flutter, and Swift.',
        icon: 'Smartphone',
        path: '/services/mobile-development',
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description: 'User-centered design process to create intuitive, beautiful interfaces that deliver exceptional user experiences.',
        icon: 'Palette',
        path: '/services/ui-ux-design',
    },
    {
        id: 4,
        title: 'Support Team as a Service',
        description: 'Dedicated customer support, QA, and technical support teams to help your business scale efficiently.',
        icon: 'Headset',
        path: '/services/support-team',
    },
    {
        id: 5,
        title: 'MVP Development',
        description: 'Rapid development of Minimum Viable Products for startups to validate ideas and secure funding.',
        icon: 'Rocket',
        path: '/services/mvp-development',
    },
    {
        id: 6,
        title: 'API Development & Integration',
        description: 'Custom API development and third-party system integrations to connect your software with external services.',
        icon: 'Waypoints',
        path: '/services/api-development',
    },
];