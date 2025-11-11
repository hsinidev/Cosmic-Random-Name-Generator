import React, { useState } from 'react';

interface ModalContent {
  title: string;
  body: React.ReactNode;
}

const modalData: Record<string, ModalContent> = {
  about: {
    title: 'About Us',
    body: (
      <p className="text-gray-300">
        The Cosmic Name Generator was created to provide developers, writers, and creative individuals with a powerful, free tool for generating high-quality placeholder names. Our mission is to offer a seamless and inspiring user experience, powered by simple, efficient, client-side logic.
      </p>
    ),
  },
  contact: {
    title: 'Contact Information',
    body: (
      <div className="text-gray-300 space-y-2">
        <p>For inquiries, please reach out through the following channels:</p>
        <p><strong>Website:</strong> doodax.com</p>
        <p><strong>Email:</strong> hsini.web@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">hsinidev</a></p>
      </div>
    ),
  },
  guide: {
    title: 'User Guide',
    body: (
      <div className="text-gray-300 space-y-4">
        <p>Using the generator is simple:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Quantity:</strong> Select how many names you want (1-50).</li>
          <li><strong>Gender:</strong> Choose between 'Male', 'Female', or 'Any' for mixed-gender results.</li>
          <li><strong>Format:</strong> Select 'Full Name', 'First Name Only', or 'Last Name Only'.</li>
          <li>Click <strong>Generate Names</strong> to see the results.</li>
          <li>Use the <strong>Copy List</strong> button to copy all names to your clipboard.</li>
        </ol>
      </div>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    body: <p className="text-gray-300">We respect your privacy. This tool operates entirely within your browser. No data you generate or enter is ever sent to our servers. All processing is done client-side, ensuring your activity remains private.</p>,
  },
  tos: {
    title: 'Terms of Service',
    body: <p className="text-gray-300">This service is provided "as is" for personal and commercial use. You are free to use the generated names in your projects. We are not liable for any issues arising from the use of this service.</p>,
  },
  dmca: {
    title: 'DMCA',
    body: <p className="text-gray-300">All content on this website, including the name generation logic and design, is original. If you believe any content infringes on your copyright, please contact us with the necessary details for review.</p>,
  },
};

const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (key: string) => {
    setModalContent(modalData[key]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const navLinks = [
    { label: 'About', key: 'about' },
    { label: 'Contact', key: 'contact' },
    { label: 'Guide', key: 'guide' },
    { label: 'Privacy Policy', key: 'privacy' },
    { label: 'Terms of Service', key: 'tos' },
    { label: 'DMCA', key: 'dmca' },
  ];

  return (
    <div className="min-h-screen text-white font-sans relative">
      {/* Background Layer - Decoupled and behind content */}
      <div className="absolute inset-0 cosmic-background z-0"></div>

      {/* Content Layer - Sits on top of the background */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="py-4 px-4 sm:px-6 md:px-8 bg-black bg-opacity-20 backdrop-blur-sm">
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => openModal(link.key)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4">{children}</main>

        <footer className="w-full text-center py-6 px-4 bg-black bg-opacity-20 backdrop-blur-sm">
          <p className="mb-2">
            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{ color: '#FFD700' }}>
              Powered by HSINI MOHAMED
            </a>
          </p>
          <p className="text-sm text-gray-400">
            doodax.com | hsini.web@gmail.com
          </p>
        </footer>
      </div>

      {/* Modal Layer - Sits on top of everything */}
      {modalContent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-900 bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg w-full max-w-lg border border-gray-700 modal-content-animation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white">{modalContent.title}</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white p-1 rounded-full transition-colors">
                <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 max-h-[70vh] overflow-y-auto">{modalContent.body}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeLayout;