import Link from 'next/link';
import { Body2Bold } from '@/styles/fonts';
import { BackDiv, ArrowLeftIcon } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <Link href={destination}>
      <BackDiv>
        <ArrowLeftIcon />
        <Body2Bold>Back</Body2Bold>
      </BackDiv>
    </Link>
  );
}
