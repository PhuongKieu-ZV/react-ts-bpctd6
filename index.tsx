import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface IScores {
  id: string;
  name: string;
  score: number;
  isActive: boolean;
  type: 'good' | 'ok' | 'poor';
  data?: {
    image: string;
    name: string;
  };
}

const App: React.FC = () => {
  const scores: IScores[] = [
    {
      id: 1,
      name: 'Score 1',
      score: 1,
      isActive: false,
      type: 'poor'
    },
    {
      id: 2,
      name: 'Score 2',
      score: 2,
      isActive: false,
      type: 'poor'
    },
    {
      id: 3,
      name: 'Score 3',
      score: 3,
      isActive: false,
      type: 'poor'
    },
    {
      id: 4,
      name: 'Score 4',
      score: 4,
      isActive: true,
      type: 'ok',
      data: {
        image:
          'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/scoop_on_cat_poop_other/1800x1200_scoop_on_cat_poop_other.jpg?resize=600px:*'
      }
    },
    {
      id: 5,
      name: 'Score 5',
      score: 5,
      isActive: false,
      type: 'ok'
    },
    {
      id: 6,
      name: 'Score 6',
      score: 6,
      isActive: false,
      type: 'ok'
    },
    {
      id: 7,
      name: 'Score 7',
      score: 7,
      isActive: false,
      type: 'ok'
    },
    {
      id: 8,
      name: 'Score 8',
      score: 8,
      isActive: false,
      type: 'good'
    },
    {
      id: 9,
      name: 'Score 9',
      score: 9,
      isActive: false,
      type: 'good'
    },
    {
      id: 10,
      name: 'Score 10',
      score: 10,
      isActive: false,
      type: 'good'
    }
  ];

  const renderScores = () => {
    return scores.map(score => {
      return <div key={score.id} className={`score ${score.type}`} />;
    });
  };
  return (
    <div>
      <div className="silder-score">{renderScores()}</div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
