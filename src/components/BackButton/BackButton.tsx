import Link from 'next/link';
import { BackDiv, ImageWithSize } from './styles';

export default function BackButton() {
  return (
    <Link href="/storefront">
      <BackDiv>
        <ImageWithSize src="/images/Arrow_Left_MD.png" alt="Back Arrow" />
        <p>Back</p>
      </BackDiv>
    </Link>
  );
}
