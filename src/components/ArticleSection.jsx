import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleSection = () => {
  const articles = [
    {
      id: '1',
      title: 'Empowering Women Through Skills Training',
      description: 'A look into our vocational training programs for women.',
      image: '/images/women-skills.jpg',
      date: '2023-11-01',
      category: 'Empowerment',
    },
    {
      id: '2',
      title: 'Healthcare Outreach in Urban Slums',
      description: 'Bringing essential healthcare services to the underserved.',
      image: '/images/healthcare-outreach.jpg',
      date: '2023-11-05',
      category: 'Healthcare',
    },
    {
      id: '3',
      title: 'Clean Water Initiatives',
      description: 'How we are providing sustainable water solutions.',
      image: '/images/clean-water.jpg',
      date: '2023-11-10',
      category: 'Environment',
    },
    {
      id: '4',
      title: 'Supporting Rural Education',
      description: 'How our initiatives are transforming educational access in remote villages',
      image: '/images/rural-education.jpg',
      date: '2023-11-15',
      category: 'Education',
    },
    // ...remaining existing articles...
  ];

  return (
    <section className="articles-section">
      <div className="container">
        <div className="row">
          {articles.slice(0, 4).map((article) => (
            <div className="col-md-3" key={article.id}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;