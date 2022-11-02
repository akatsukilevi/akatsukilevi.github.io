import { useNavigate } from '@services/loader';

import classes from './credits.module.scss';

export const Page = () => {
	const navigate = useNavigate();

	return (
		<div className={classes['page']}>
			<div className={classes['header']}>
				<div className={classes['titleBadge']}>
					<span>&nbsp;</span>
					<span>
						{`<$>: `}
						<b onClick={() => navigate('/home')}>~</b>
						{`/credits`}
					</span>
				</div>
			</div>
			<div className={classes['pageContent']}>
				<div className={classes['section']} style={{ animationDelay: '0.5s' }}>
					<h2>Credits</h2>
					<ul>
						<li style={{ animationDelay: '1s' }}>
							<h3 className={classes['title']}>
								<a href="https://vitejs.dev" target="_blank">
									Vite
								</a>
							</h3>
							<div className={classes['content']}>
								<div>
									Vite (French word for "fast", pronounced <code>/vit/</code>) is a new breed of
									frontend build tool that significantly improves the frontend development experience.
									It consists of two major parts:
								</div>
							</div>
						</li>
						<li style={{ animationDelay: '1.5s' }}>
							<h3 className={classes['title']}>
								<a href="https://vitejs.dev" target="_blank">
									React
								</a>
							</h3>
							<div className={classes['content']}>
								<div>
									Vite (French word for "fast", pronounced <code>/vit/</code>) is a new breed of
									frontend build tool that significantly improves the frontend development experience.
								</div>
							</div>
						</li>
						<li style={{ animationDelay: '2s' }}>
							<h3 className={classes['title']}>
								<a href="https://www.typescriptlang.org/" target="_blank">
									Typescript
								</a>
							</h3>
							<div className={classes['content']}>
								<div>
									TypeScript is a language for application-scale JavaScript. TypeScript adds optional
									types to JavaScript that support tools for large-scale JavaScript applications for
									any browser, for any host, on any OS. TypeScript compiles to readable,
									standards-based JavaScript.
								</div>
							</div>
						</li>
						<li style={{ animationDelay: '2.5s' }}>
							<h3 className={classes['title']}>
								<a href="https://sass-lang.com/" target="_blank">
									SASS
								</a>
							</h3>
							<div className={classes['content']}>
								<div>
									CSS with superpowers. Sass is the most mature, stable, and powerful professional
									grade CSS extension language in the world.
								</div>
							</div>
						</li>
						<li style={{ animationDelay: '3s' }}>
							<h3 className={classes['title']}>
								<a href="https://github.com/tonsky/FiraCode" target="_blank">
									Fira Code
								</a>
							</h3>
							<div className={classes['content']}>
								<div>
									Fira Code is a free monospaced font containing ligatures for common programming
									multi-character combinations. This is just a font rendering feature: underlying code
									remains ASCII-compatible. This helps to read and understand code faster. For some
									frequent sequences like <code>..</code> or <code>//</code>, ligatures allow us to
									correct spacing.
								</div>
							</div>
						</li>
						<li style={{ animationDelay: '3.5s' }}>
							<h3 className={classes['title']}>
								<a href="https://github.com/morhetz/gruvbox" target="_blank">
									Gruvbox
								</a>
							</h3>
							<div className={classes['content']}>
								<div>
									Gruvbox is heavily inspired by badwolf, jellybeans and solarized. Designed as a
									bright theme with pastel 'retro groove' colors and light/dark mode switching in the
									way of solarized. The main focus when developing gruvbox is to keep colors easily
									distinguishable, contrast enough and still pleasant for the eyes.
								</div>
							</div>
						</li>
						<li style={{ animationDelay: '4s' }}>
							<h3 className={classes['title']}>
								<a href="https://codepen.io/Tibixx/pen/YzVqzZM" target="_blank">
									Lines Background
								</a>
							</h3>
							<div className={classes['content']}>
								<div>Original background made by Tibixx</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
