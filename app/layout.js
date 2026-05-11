import '../styles/globals.css';

export const metadata = {
  title: 'Saurabh Rane — Specialist Product Engineer',
  description:
    'Senior full-stack engineer with 10+ years building scalable .NET & Angular systems on Azure. Team leader, AI early-adopter, and cloud architect.',
  keywords: [
    'Saurabh Rane',
    '.NET Core',
    'Angular',
    'Azure',
    'Full Stack Engineer',
    'Mumbai',
  ],
  openGraph: {
    title: 'Saurabh Rane — Specialist Product Engineer',
    description:
      'Building robust, AI-augmented platforms that scale. 10+ years across fintech, automotive, and enterprise SaaS.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
