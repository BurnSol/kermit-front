// >> Modules
import styles from './points.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import fire from '@/public/design/fire.png';
import shadowAAALeft from '@/public/design/shadowAAALeft.png';
import shadowAAARight from '@/public/design/shadowAAARight.png';

// >> Script
export default function Points(props) {
	return (
		<div className={styles.section}>
			<div className={styles.onePoint} data-value="left">
				<div className={styles.shadowAAARight}>
					<Image
						src={shadowAAARight}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.insidePoint} data-value="point1">
					<Typography>
						Deposit your $sol tokens, receive powerful $burn in
						return
					</Typography>
				</div>
			</div>
			<div className={styles.onePoint} data-value="right">
				<div className={styles.insidePoint} data-value="point2">
					<Typography>your fuel for ai mining</Typography>
				</div>
			</div>
			<div className={styles.onePoint} data-value="left">
				<div className={styles.insidePoint} data-value="point3">
					<Typography>deposit $burn on your dashboard</Typography>
				</div>
			</div>
			<div className={styles.onePoint} data-value="center">
				<div className={styles.shadowAAALeft}>
					<Image
						src={shadowAAALeft}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.insidePoint} data-value="point4">
					<Typography>start mining ai projects like $tao</Typography>
				</div>
			</div>

			<Typography className={styles.desc}>
				don’t burn solana in vain, but use it for great things! the ai
				revolutiion is coming
			</Typography>
			<div className={styles.fires}>
				<div className={styles.topFire}>
					<Image
						src={fire}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.bottomFire}>
					<Image
						src={fire}
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
