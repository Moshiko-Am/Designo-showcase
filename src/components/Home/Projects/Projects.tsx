import React from 'react';
import { generateBEMClassName } from 'bem-classnames-generator/dist';
import { useNavigate } from 'react-router-dom';

interface IProjects {}

const Projects: React.FC<IProjects> = () => {
	const BEMBlock = 'projects';

	const navigate = useNavigate();

	const projects = [
		{
			id: 1,
			name: 'web-design',
			title: 'WEB DESIGN',
		},
		{
			id: 2,
			name: 'app-design',
			title: 'APP DESIGN',
		},
		{
			id: 3,
			name: 'graphic-design',
			title: 'GRAPHIC DESIGN',
		},
	];

	return (
		<div className={generateBEMClassName({ block: BEMBlock })}>
			{projects.map((project) => (
				<div
					key={project.id}
					className={generateBEMClassName({
						block: BEMBlock,
						element: 'container',
						modifier: project.name,
					})}
					onClick={() => navigate(`projects/${project.name}`)}
				>
					<h2
						className={generateBEMClassName({
							block: BEMBlock,
							element: 'info',
							modifier: 'title',
						})}
					>
						{project.title}
					</h2>
					<h3
						className={generateBEMClassName({
							block: BEMBlock,
							element: 'info',
							modifier: 'description',
						})}
					>
						VIEW PROJECTS
					</h3>
				</div>
			))}
		</div>
	);
};

export default Projects;
