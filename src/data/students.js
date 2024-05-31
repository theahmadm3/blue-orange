import koloImage from '../assets/images/umarkolo.jpeg'

export const students = [
    {
        id: 1,
        name: 'Ibrahim',
        email: '20233539@nileuniversity.edu.ng',
        avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
        topic: 'No data yet',
        supervisor: 'No data yet',
        supervisor2: 'No data yet',
        abstract: 'No data yet',
        introduction: 'No data yet',
        methodology: 'No data yet',
        findings: 'No data yet',
        conclusion: 'No data yet',
        publications: [
            'No data yet',
            'No data yet'
        ],
        presentations: [
            'No data yet',
            'No data yet'
        ],
        publicationLink: [
            { name: 'No data yet', url: 'No data yet' },
            { name: 'No data yet', url: 'No data yet' }
        ],
    },
    {
        id: 2,
        name: 'Musa Umar Kolo',
        email: '20233539@nileuniversity.edu.ng',
        avatar: koloImage,
        topic: 'Evaluating pavement performance under varying climatic conditions',
        supervisor: 'Prof. Abdulhameed Danjuma Mambo',
        supervisor2: 'Dr. Abubakar Dayyabu',
        abstract: 'This research focuses on evaluating the performance of pavements under different climatic conditions, aiming to improve sustainability and durability.',
        introduction: 'The study aims to address the challenges faced in pavement performance due to climatic variations, exploring new materials and techniques for better resilience.',
        methodology: 'The research employs both experimental and computational methods, including field tests, laboratory experiments, and finite element modeling.',
        findings: 'The key findings indicate that certain materials significantly enhance pavement durability under extreme weather conditions, while others require further development.',
        conclusion: 'The research concludes that adopting innovative materials and methodologies can substantially improve pavement performance, suggesting further studies in real-world scenarios.',
        publications: [
            'M. U. Kolo, A. D. Mambo, "Innovative Materials for Pavement Sustainability", Journal of Civil Engineering, 2023',
            'M. U. Kolo, A. Dayyabu, "Impact of Climate on Pavement Performance", International Journal of Transportation, 2022'
        ],
        presentations: [
            'International Conference on Transportation Infrastructure, 2023',
            'National Seminar on Civil Engineering, 2022'
        ],
        publicationLink: [
            { name: 'ResearchGate Profile', url: 'https://www.researchgate.net/profile/Musa-Umar-Kolo/research' },
            { name: 'Google Scholar Profile', url: 'https://scholar.google.com/citations?hl=en&user=5DZa8PwAAAAJ' }
        ],
    },
]