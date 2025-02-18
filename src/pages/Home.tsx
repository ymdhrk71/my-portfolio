import React from 'react';
import { Link } from 'react-router-dom';

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'React ポートフォリオ',
    description: 'ReactとTypeScriptで作成した個人ポートフォリオサイト。',
    imageUrl: 'https://via.placeholder.com/300x200?text=Portfolio+Project',
  },
  {
    id: 2,
    title: 'Eコマースアプリ',
    description: 'オンラインショップアプリ（カート機能・決済機能付き）。',
    imageUrl: 'https://via.placeholder.com/300x200?text=E-commerce+App',
  },
  {
    id: 3,
    title: 'チャットアプリ',
    description: 'リアルタイム通信が可能なチャットアプリ。',
    imageUrl: 'https://via.placeholder.com/300x200?text=Chat+App',
  }
];

const Home: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 私のポートフォリオへようこそ！</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
