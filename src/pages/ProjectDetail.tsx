import React from 'react';
import { Link, useParams } from 'react-router-dom';

const projectData = {
  1: {
    title: 'React ポートフォリオ',
    description: 'このプロジェクトでは、ReactとTypeScriptを使用してポートフォリオサイトを構築しました。パフォーマンス最適化やレスポンシブデザインを意識しています。',
    imageUrl: 'https://via.placeholder.com/600x300?text=Portfolio+Project',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    githubLink: 'https://github.com/yourusername/portfolio',
  },
  2: {
    title: 'Eコマースアプリ',
    description: 'オンラインショップアプリで、カート機能、決済機能を実装しました。Firebaseを使った認証機能も搭載しています。',
    imageUrl: 'https://via.placeholder.com/600x300?text=E-commerce+App',
    technologies: ['React', 'Redux', 'Firebase'],
    githubLink: 'https://github.com/yourusername/ecommerce-app',
  },
  3: {
    title: 'チャットアプリ',
    description: 'リアルタイムでメッセージのやり取りが可能なチャットアプリ。WebSocketを活用し、スムーズな通信を実現しました。',
    imageUrl: 'https://via.placeholder.com/600x300?text=Chat+App',
    technologies: ['React', 'Socket.IO', 'Node.js'],
    githubLink: 'https://github.com/yourusername/chat-app',
  }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData[Number(id) as unknown as keyof typeof projectData];

  if (!project) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-600">⚠️ プロジェクトが見つかりません。</h2>
        <Link to="/" className="text-blue-600 underline mt-4 block">ホームに戻る</Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover mb-6 rounded-lg shadow-md" />
      <p className="text-lg mb-4">{project.description}</p>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">使用技術:</h3>
        <ul className="list-disc list-inside">
          {project.technologies.map((tech, index) => (
            <li key={index} className="text-gray-700">{tech}</li>
          ))}
        </ul>
      </div>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition mb-4"
      >
        GitHubリポジトリを見る
      </a>
      <br />
      <Link to="/" className="text-blue-600 underline">← ホームに戻る</Link>
    </div>
  );
};

export default ProjectDetail;
