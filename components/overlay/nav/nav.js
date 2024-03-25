// >> Modules
import styles from './nav.module.scss';
import design from '@/styles/design_system.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { useWalletMultiButton } from '@solana/wallet-adapter-base-ui';

import logo from '@/public/logo.svg';

// >> Script
export default function Nav(props) {
	const { setVisible: setModalVisible } = useWalletModal();
	const { buttonState, onConnect, onDisconnect, publicKey } =
		useWalletMultiButton({
			onSelectWallet() {
				setModalVisible(true);
			},
		});

	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.left}>
					<Image
						src={logo}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.right}>
					<Button
						className={`${design.fireBtn} ${styles.btn}`}
						onClick={() => {
							if (buttonState === 'no-wallet') {
								setModalVisible(true);
							} else if (buttonState === 'has-wallet') {
								if (onConnect) {
									onConnect();
								}
							} else if (buttonState === 'connected') {
								onDisconnect();
							}
						}}
						target="_blank"
						disableRipple
					>
						<Typography>
							{buttonState === 'connected'
								? publicKey.toBase58().slice(0, 4) +
								  '...' +
								  publicKey.toBase58().slice(-4)
								: buttonState === 'has-wallet'
								? 'Connect wallet'
								: 'Choose wallet'}
						</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}
