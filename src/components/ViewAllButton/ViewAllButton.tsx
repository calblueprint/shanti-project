import Link from 'next/link';
import { ArrowRight } from 'react-feather';
import { Body1Point5 } from '@/styles/fonts';
import { ViewAllDiv } from './styles';

export default function BackButton(props: { destination: string }) {
  const { destination } = props;
  return (
    <Link href={destination}>
      <ViewAllDiv>
        <Body1Point5>View All</Body1Point5>
        <ArrowRight />
      </ViewAllDiv>
    </Link>
  );
}
