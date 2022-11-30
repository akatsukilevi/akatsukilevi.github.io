//* Original code by Tibix, code at: https://codepen.io/Tibixx/pen/YzVqzZM

import { useEffect, useRef, useCallback, memo } from 'react';
import { dist } from '@utils/distance';

import classes from './background.module.scss';

interface Props {
	width: number;
	length: number;
	emitNum: number;
	speed: number;
	maxLines: number;
	paused?: boolean;
}

export const LayoutBackground = memo((conf: Props) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const lines: Line[] = [];
	const bgDots: Dot[] = [];

	const emitLine = useCallback(() => {
		if (conf.maxLines < lines.length) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		for (let i = 0; i < conf.emitNum; i++) {
			const rx = Math.random() * ctx.canvas.width + 100;
			const ry = Math.random() * ctx.canvas.width - 100;

			lines.push({
				x1: rx,
				y1: ry,
				x2: rx,
				y2: ry,
				length: (Math.random() * (260 - 80) + 80) * conf.length,
				width: (Math.random() * (15 - 5) + 5) * conf.width,
				v1: (Math.random() * (4 - 2) + 2) * conf.speed,
				v2: (Math.random() * (1 - 0.5) + 0.5) * conf.speed,
				half: false,
			});
		}
	}, [canvasRef, lines]);

	const drawBackground = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		for (let i = 0; i < bgDots.length; i++) {
			const grd = ctx.createRadialGradient(bgDots[i].x, bgDots[i].y, 0, bgDots[i].x, bgDots[i].y, bgDots[i].rad);
			ctx.globalCompositeOperation = bgDots[i].op || 'lighter';

			grd.addColorStop(0, `${bgDots[i].colorMain}`);
			grd.addColorStop(1, `${bgDots[i].colorAlt}`);
			ctx.beginPath();
			ctx.arc(bgDots[i].x, bgDots[i].y, bgDots[i].rad, 0, Math.PI * 2);
			ctx.fillStyle = grd;
			ctx.fill();
			ctx.closePath();
		}
	}, [canvasRef, bgDots]);

	const drawLines = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.globalCompositeOperation = 'lighter';
		for (let i = 0; i < lines.length; i++) {
			ctx.lineWidth = lines[i].width;
			ctx.beginPath();
			ctx.moveTo(lines[i].x1, lines[i].y1);
			ctx.lineTo(lines[i].x2, lines[i].y2);

			ctx.strokeStyle = '#a89984'; //* Normal
			if (i % 2 == 0 && i % 5 == 0) ctx.strokeStyle = '#fb4934'; //* FizzBuzz
			if (i % 2 == 0) ctx.strokeStyle = '#458588'; //* Fizz
			if (i % 5 == 0) ctx.strokeStyle = '#b16286'; //* Buzz

			ctx.lineCap = 'round';
			ctx.stroke();
			ctx.closePath();

			if (lines[i].half == false) {
				lines[i].x1 -= lines[i].v1;
				lines[i].y1 += lines[i].v1;
				lines[i].x2 -= lines[i].v2;
				lines[i].y2 += lines[i].v2;
				if (dist(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2) > lines[i].length) {
					lines[i].half = true;
				}
			} else {
				lines[i].x1 -= lines[i].v2;
				lines[i].y1 += lines[i].v2;
				lines[i].x2 -= lines[i].v1;
				lines[i].y2 += lines[i].v1;
			}
		}
	}, [canvasRef, lines]);

	const draw = useCallback(() => {
		if (conf.paused) return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		//* Clear screen
		ctx.globalCompositeOperation = 'source-over';
		ctx.beginPath();
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.closePath();

		//* Draw stuff
		drawBackground();
		drawLines();
	}, [canvasRef, drawBackground, drawLines, conf]);

	const resize = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		canvas.style.width = `${(canvas.width = window.innerWidth)}px`;
		canvas.style.height = `${(canvas.height = window.innerHeight)}px`;
	}, [canvasRef]);

	const checkLines = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		emitLine();

		for (let i = 0; i < lines.length; i++) {
			if (lines[i].half == true && dist(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2) <= 10) {
				lines[i] = lines[lines.length - 1];
				lines.pop();
			} else if (lines[i].x1 < 0 && lines[i].x2 < 0 && lines[i].y1 > canvas.height && lines[i].y2 > canvas.height) {
				lines[i] = lines[lines.length - 1];
				lines.pop();
			}
		}
	}, [canvasRef, emitLine, lines]);

	//* For resizing
	useEffect(() => {
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	});

	//* For checking lines
	useEffect(() => {
		const interval = setInterval(checkLines, 10);
		return () => clearInterval(interval);
	});

	//* Initializes the canvas itself
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const context = canvas.getContext('2d');
		if (!context) return;

		bgDots.push({
			rad: (canvas.width + canvas.height) * 2,
			x: canvas.width / 2,
			y: canvas.height / 2,
			colorMain: '#282828',
			colorAlt: '#3c3836',
			op: 'copy',
		});

		let animationFrameId: number;
		const render = () => {
			draw();
			animationFrameId = window.requestAnimationFrame(render);
		};

		animationFrameId = window.requestAnimationFrame(render);
		return () => window.cancelAnimationFrame(animationFrameId);
	}, [draw, bgDots]);

	return (
		<canvas
			className={[classes['background'], !conf.paused && classes['running']].join(' ')}
			ref={canvasRef}
			width={window.innerWidth}
			height={window.innerHeight}
		/>
	);
});

interface Line {
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	length: number;
	width: number;
	v1: number;
	v2: number;
	half: boolean;
}

interface Dot {
	rad: number;
	x: number;
	y: number;
	colorMain: string;
	colorAlt: string;
	op?: GlobalCompositeOperation;
}
