import Location from './Location';

import { FooterDiv, ContactDiv } from '../styles/components';

export default function Footer() {
  return (
    <main>
      <FooterDiv>
        <ContactDiv>
          <h1>Contact Us</h1>
        </ContactDiv>
        <Location
          District="Tenderloin"
          Address="730 Polk Street, 3rd Floor San Francisco, CA 9410"
          Phone="Phone: (415) 674-4700"
        />

        <Location
          District="Mission District"
          Address="3170 23rd Street San Francisco, CA 94110"
          Phone="Phone: (415) 674-4700"
        />
        <Location
          District="Potrero Hill"
          Address="950 Connecticut St San Francisco, CA 94107"
          Phone="Phone: (415) 674-4700"
        />
      </FooterDiv>
    </main>
  );
}
