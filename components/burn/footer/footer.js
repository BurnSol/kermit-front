// >> Modules
import styles from './footer.module.scss';
import design from '@/styles/design_system.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import twitterX from '@/public/twitterX.svg';
import toast from 'react-hot-toast';

// >> Script
export default function Footer(props) {
	return (
		<div className={styles.section}>
			<div className={styles.fire1}>
				<div className={styles.inside}>
					<Typography className={styles.title}>
						Solana deposit contract:
					</Typography>
					<Typography
						className={styles.desc}
						onClick={() => {
							navigator.clipboard.writeText(
								'Az8Gpftd7uEe67CbRKF6kaewgbfaKo3tRnLUUzTrqtN1'
							);
							toast.success(
								'Contract address copied to clipboard!'
							);
						}}
					>
						<span className={styles.desktop}>
							Az8Gpftd7uEe67C...o3tRnLUUzTrqtN1
						</span>
						<span className={styles.mobile}>Az8G...qtN1</span>
					</Typography>

					<Link
						href="https://google.com"
						target="_blank"
						className={styles.twitterX}
					>
						<Image
							src={twitterX}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
