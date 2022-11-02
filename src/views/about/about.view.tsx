import { useNavigate } from '@services/loader';

import classes from './about.module.scss';

export const Page = () => {
	const navigate = useNavigate();

	return (
		<div className={classes['page']}>
			<div className={classes['profileCard']}>
				<div className={classes['profileHeader']}>
					<div className={classes['profilePicture']}></div>
					<div>
						<h1 className={classes['profileName']}>Felipe A. Sgarbi</h1>
						<span className={classes['credits']}>
							Photo by{' '}
							<a href="https://unsplash.com/@yancymin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Yancy Min
							</a>{' '}
							on{' '}
							<a href="https://unsplash.com/s/photos/code?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
								Unsplash
							</a>
						</span>
					</div>
				</div>
			</div>
			<div className={classes['header']}>
				<div className={classes['titleBadge']}>
					<span>&nbsp;</span>
					<span>
						{`<$>: `}
						<b onClick={() => navigate('/home')}>~</b>
						{`/about`}
					</span>
				</div>
			</div>
			<div className={classes['pageContent']}>
				<div className={classes['section']} style={{ animationDelay: '0.5s' }}>
					<h2>About me</h2>
					<div className={classes['info']}>
						Background in cloud, desktop and mobile platforms. Skilled in using JavaScript/Typescript, .NET,
						Rust, Java, and SQL/No-SQL. Complex problem-solver with an analytical driven mindset. Dedicated
						to achieving demanding development objectives and innovating with new solutions. Resourceful
						Application Developer with outstanding knowledge of Front-End, Back-End and Dev Ops with 6+
						years of experience.
					</div>
				</div>
				<div className={classes['section']} style={{ animationDelay: '1s' }}>
					<h2>Skills</h2>
					<ul className={classes['grid']}>
						<li>
							<h3 className={classes['title']}>JS / TS</h3>
							<div className={classes['content']}>
								<div className={classes['progressBar']}>
									<span style={{ width: '100%', background: 'var(--color-blue)' }}></span>
								</div>
							</div>
						</li>
						<li>
							<h3 className={classes['title']}>SQL</h3>
							<div className={classes['content']}>
								<div className={classes['progressBar']}>
									<span style={{ width: '100%', background: 'var(--color-aqua)' }}></span>
								</div>
							</div>
						</li>
						<li>
							<h3 className={classes['title']}>.NET C#</h3>
							<div className={classes['content']}>
								<div className={classes['progressBar']}>
									<span style={{ width: '80%', background: 'var(--color-purple)' }}></span>
								</div>
							</div>
						</li>
						<li>
							<h3 className={classes['title']}>C / C++</h3>
							<div className={classes['content']}>
								<div className={classes['progressBar']}>
									<span style={{ width: '80%', background: 'var(--color-blue-bright)' }}></span>
								</div>
							</div>
						</li>
						<li>
							<h3 className={classes['title']}>Java</h3>
							<div className={classes['content']}>
								<div className={classes['progressBar']}>
									<span style={{ width: '80%', background: 'var(--color-red)' }}></span>
								</div>
							</div>
						</li>
						<li>
							<h3 className={classes['title']}>Rust</h3>
							<div className={classes['content']}>
								<div className={classes['progressBar']}>
									<span style={{ width: '50%', background: 'var(--color-orange)' }}></span>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<div className={classes['section']} style={{ animationDelay: '1.5s' }}>
					<h2>Work Experience</h2>
					<ul>
						<li>
							<h3 className={classes['title']}>
								<a href="https://grupotisolucao.com.br/" target="_blank">
									Grupo Ti Solução
								</a>
							</h3>
							<div className={classes['content']}>
								<p>{'>'} March 03, 2015</p>
								<p>{'<'} June 15, 2017</p>
								<p>{'$'} Full-Stack Developer</p>
								Developed a national-scale payroll loan management system responsible for coordinating
								multiple resellers around the country, keeping control of multiple reseller financial
								data, ensuring clients loan records were synced and updated with multiple banks while
								keeping a central management system for a full-view details of the performance of all
								resellers, by using stability-first languages and distributed systems to ensure
								near-zero downtime across the whole country. Developed hardware maintenance tools and
								benchmarks for ensuring the quality and stability of multiple types of hardware's,
								ranging from office computers to large-scale servers and across multiple operating
								systems.
							</div>
						</li>
						<li>
							<h3 className={classes['title']}>
								<a href="https://www.sigamecar.com.br/" target="_blank">
									SigaMeCar
								</a>
							</h3>
							<div className={classes['content']}>
								<p>{'<'} June 15, 2017</p>
								<p>{'>'} Present</p>
								<p>{'$'} Full-Stack Developer</p>
								Developed a high availability, fault tolerant car tracking platform from scratch
								following Industry's best practices, with multi-platform compatibility to all major
								browsers and major phone operating systems, while developing, implementing and testing a
								satellite-based GPS tracker solution to multiple models and brands of vehicles, ranging
								from personal vehicles, motorcycles, several types of trucks, industrial machinery,
								power generators, electric-bicycles, naval vehicles(such as Jet-Ski). Also developed
								custom solutions to specific clients to manage and control fleets of vehicles and their
								drivers using a AI-powered platform that ensured all vehicles were in the right place at
								the right time in safety.
							</div>
						</li>
					</ul>
				</div>

				<div className={classes['section']} style={{ animationDelay: '2s' }}>
					<h2>Education</h2>
					<ul>
						<li>
							<h3 className={classes['title']}>Escola Estadual Deputado Benedito Matarazzo</h3>
							<div className={classes['content']}>
								<p>{'>'} January 01, 2012</p>
								<p>{'<'} December 20, 2018</p>
								<p>{'$'} High School</p>
								<ul>
									<li>
										<h3 className={classes['title']}>CC50 C++ Course</h3>
										<div className={classes['content']}>
											Taught by Henrique Dubugras (co-CEO of Brex / Pagar.me)
										</div>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>

				<div className={classes['section']} style={{ animationDelay: '2.5s' }}>
					<h2>Awards</h2>
					<ul>
						<li>
							<h3 className={classes['title']}>Brazilian Computer Olympics</h3>
							<div className={classes['content']}>
								<p>{'>'} July 12, 2013</p>
								<p>{'$'} National Finalist</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
