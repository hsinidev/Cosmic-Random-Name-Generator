import React from 'react';
import ThemeLayout from './components/ThemeLayout.tsx';
import NameGeneratorTool from './components/NameGeneratorTool.tsx';
import SeoArticle from './utils/SeoArticle.tsx';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="relative z-20">
        <NameGeneratorTool />
        <SeoArticle />
      </div>
    </ThemeLayout>
  );
};

export default App;