// >> Modules
import styles from './burn.module.scss';

// >> Components
import Nav from '@/components/overlay/nav/nav';
import Hero from './hero/hero';
import Points from './points/points';
import BurnSection from './burnSection/burnSection';
import Footer from './footer/footer';

// >> Script
export default function Burn(props) {
	return (
		<div className={styles.page}>
			<Nav setLoading={props.setLoading} />
			<Hero />
			<Points />
			<BurnSection />
			<Footer />
		</div>
	);
}
