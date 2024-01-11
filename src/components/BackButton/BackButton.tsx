import Image from 'next/image';
import Link from 'next/link';
import { BackDiv } from './styles';

export default function BackButton() {
  return (
    <Link href="/storefront">
      <BackDiv>
        <Image
          src="/images/Arrow_Left_MD.png"
          alt="Back Arrow"
          width={23}
          height={23}
        />
        <p>Back</p>
      </BackDiv>
    </Link>
  );
}
