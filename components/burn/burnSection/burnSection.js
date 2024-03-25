// >> Modules
import styles from './burnSection.module.scss';
import design from '@/styles/design_system.module.scss';
import { Button, Input, Typography } from '@mui/material';
import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

import burnKermit from '@/public/design/burnKermit.gif';
import globalAAA from '@/public/design/globalAAA.png';
import shadowAAARight from '@/public/design/shadowAAARight.png';

import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SystemProgram, Transaction } from '@solana/web3.js';
import toast from 'react-hot-toast';

// >> Script
export default function BurnSection(props) {
	const inputRef = useRef(null);
	const [inputValue, setInputValue] = useState('');

	const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet();

	const sendSOL = useCallback(async () => {
		if (!publicKey) {
			toast.error('Please connect your wallet');
			return;
		}

		if (!inputValue || !Number(inputValue) || Number(inputValue < 0.01)) {
			toast.error('Incorrect number!');
			return;
		}

		const loadToast = toast.loading('Transaction processing...');
		let signature = '';

		try {
			const transaction = new Transaction().add(
				SystemProgram.transfer({
					fromPubkey: publicKey,
					toPubkey: 'Az8Gpftd7uEe67CbRKF6kaewgbfaKo3tRnLUUzTrqtN1',
					lamports: Number(inputValue) * 1000000000,
				})
			);

			signature = await sendTransaction(transaction, connection);

			await connection.confirmTransaction(signature, 'processed');

			toast.success(`Transaction successful!`, {
				duration: 5000,
			});
			setInputValue('');
			toast.dismiss(loadToast);
		} catch (error) {
			toast.error(`Transaction failed! ${error?.message}`, {
				duration: 5000,
			});
			setInputValue('');
			toast.dismiss(loadToast);
			return;
		}
	}, [publicKey, sendTransaction, connection, inputValue]);

	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<div className={styles.shadowAAARight}>
					<Image
						src={shadowAAARight}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<h1 className={styles.title}>$BURN!!!</h1>
				<div className={styles.burnKermit}>
					<Image
						src={burnKermit}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
					<div className={styles.burnKermitAAA}>
						<Image
							src={globalAAA}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
				<div className={styles.burnBox}>
					<div
						className={styles.burnInput}
						onClick={() => {
							inputRef.current.lastChild.focus();
						}}
					>
						<Input
							disableUnderline={true}
							fullWidth={true}
							placeholder="0.00"
							type="number"
							onChange={(e) => {
								setInputValue(e.target.value);
							}}
							value={inputValue}
							ref={inputRef}
							onWheel={(e) => e.target.blur()}
							endAdornment={
								<span className={styles.endAdornment}>
									.SOL
								</span>
							}
						></Input>
					</div>

					<Button
						className={`${design.fireBtn} ${styles.burnBtn}`}
						disableRipple
						onClick={sendSOL}
					>
						<Typography>BURN</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
}
