import classes from './loader.module.scss';

export const Loader = () => {
	return (
		<div className={classes['loaderRoot']}>
			<div className={classes['loaderSpinner']}>
				<div className={classes['loaderInner']}>
					<div className={classes['loaderBlack']}></div>
				</div>
			</div>
		</div>
	);
};
