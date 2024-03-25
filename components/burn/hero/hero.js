// >> Modules
import styles from './hero.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import burnText from '@/public/design/burnText.png';
import globalAAA from '@/public/design/globalAAA.png';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.topTitle}>
					<Typography>AI + MEME + SOLANA =</Typography>
					<div className={styles.burnText}>
						<Image
							src={burnText}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
				<div className={styles.aaa1}>
					<Image
						src={globalAAA}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
			<div className={styles.fire1}>
				<div className={styles.fire1AAA}>
					<Image
						src={globalAAA}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
		</div>
	);
}
