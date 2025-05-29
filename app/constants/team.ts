import { TeamMember } from '../types';

export const team: TeamMember[] = [
    {
        id: 1,
        name: 'David Mitchell',
        role: 'CEO & Founder',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
        bio: 'David has over 15 years of experience in software development and has led teams at major tech companies before founding TheFullSnackDevs.',
        socials: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 2,
        name: 'Sophia Chen',
        role: 'CTO',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
        bio: 'Sophia is an expert in scalable architecture and cloud solutions, with a passion for creating efficient and maintainable code bases.',
        socials: {
            linkedin: 'https://linkedin.com',
            github: 'https://github.com',
        },
    },
    {
        id: 3,
        name: 'Marcus Williams',
        role: 'Lead Designer',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
        bio: 'Marcus brings creative vision and user-centered design thinking to every project, ensuring our products are both beautiful and functional.',
        socials: {
            linkedin: 'https://linkedin.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 4,
        name: 'Aisha Patel',
        role: 'Head of Client Relations',
        image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
        bio: 'Aisha ensures that every client receives exceptional service and that projects are delivered on time and to specification.',
        socials: {
            linkedin: 'https://linkedin.com',
        },
    },
];