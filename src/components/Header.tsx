import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link to="/">ホーム</Link>
        <Link to="/projects/1">プロジェクト詳細</Link>
      </div>
    </nav>
  );
};

export default Header;
export { };

