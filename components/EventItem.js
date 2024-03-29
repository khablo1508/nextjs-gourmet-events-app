import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/EventItem.module.css';

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          alt='event image'
          src={
            evt.attributes.image.data
              ? evt.attributes.image.data.attributes.formats.thumbnail.url
              : '/images/event-default.png'
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        <span>
          {new Date(evt.attributes.date).toLocaleDateString('en-UK')} at{' '}
          {evt.attributes.time}
        </span>
        <h3>{evt.attributes.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${evt.attributes.slug}`}>
          <button className='btn'>Details</button>
        </Link>
      </div>
    </div>
  );
}
