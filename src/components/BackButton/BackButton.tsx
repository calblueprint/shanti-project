import Link from 'next/link';
import { ArrowLeft } from 'react-feather';
import { BackDiv } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <Link href={destination}>
      <BackDiv>
        <ArrowLeft />
        <p>Back</p>
      </BackDiv>
    </Link>
  );
}
