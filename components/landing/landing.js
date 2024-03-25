// >> Modules
import styles from './landing.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Link from 'next/link';

import heroKermit from '@/public/design/heroKermit.png';
import globalAAA from '@/public/design/globalAAA.png';

// >> Components
import Nav from '@/components/overlay/nav/nav';
import { useRouter } from 'next/router';

// >> Script
export default function Landing(props) {
	const router = useRouter();

	return (
		<div className={styles.page}>
			<Nav setLoading={props.setLoading} />
			<div className={styles.inside}>
				<h1 className={styles.title}>$BURN TEM ALL</h1>

				<Button
					className={`${design.fireBtn} ${styles.btn}`}
					disableRipple
					onClick={() => {
						props.setLoading(true);
						setTimeout(() => {
							router.push('/burn');
							props.setLoading(false);
						}, 2000);
					}}
				>
					<Typography>Enter</Typography>
				</Button>

				<div className={styles.heroKermit}>
					<Image
						src={heroKermit}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
					<div className={styles.heroKermitAAA}>
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
		</div>
	);
}
