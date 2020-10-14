import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const infoData = [
  {
    title: 'Opening Hours',
    description: 'We are open 7 days',
    icon: faClock,
    background: 'primary',
  },
  {
    title: 'Visit Our Location',
    description: 'Brooklyn, NY 10036, USA',
    icon: faMapMarkedAlt,
    background: 'dark',
  },
  {
    title: 'Contact Us Now',
    description: '+1229789690',
    icon: faPhoneAlt,
    background: 'primary',
  },
]

const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {
          infoData.map(info => <InfoCard info={info} ></InfoCard>)
        }
      </div>
    </section>
  );
};

export default BusinessInfo;